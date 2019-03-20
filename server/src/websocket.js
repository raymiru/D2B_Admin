module.exports = (io) => {
    let user_list = {};
    let connectedUsers = {};


    io.on('connection', socket => {
        console.log('Подключен пользователь');

        socket.on('login', data => {
            socket.steam_username = data.steam_username;
            if (socket.steam_username in user_list) {
                console.log('Пользователь уже зарегестрирован')
            } else {
                user_list[socket.steam_username] = data;
                connectedUsers[socket.steam_username] = socket;
                console.log(user_list);
                updateUserList();
            }
        });

        socket.on('disconnect', () => {
            console.log('пользователь отключен');
            delete user_list[socket.steam_username];
            delete connectedUsers[socket.steam_username];
        });

        function updateUserList() {
            io.sockets.emit('user_list', user_list);
        }

        socket.on('user_list', () => {
            connectedUsers['admin'].emit('user_list', () => {
                user_list
            })
        });

        socket.on('bet_msg_to_player', msg => {
            try {
                connectedUsers[msg.steam_username].emit('bet_msg_to_player', {
                    team_winner: msg.team_winner,
                    bet_val: msg.bet_val
                })
            } catch (e) {
                console.log('User is not registered or username is incorrect ')
            }
        });

        socket.on('bet_msg_from_watcher', msg => {
            try {
                console.log(msg)
                connectedUsers['admin'].emit('bet_msg_from_watcher', {
                    match_url: msg.match_url,
                    t_name: msg.t_name,
                    team_1_name: msg.team_1_name,
                    team_2_name: msg.team_2_name,
                    team_1_img: msg.team_1_img,
                    team_2_img: msg.team_2_img,
                    bo: msg.bo,
                    map_num_info: msg.map_num_info,
                    team_1_odds: msg.team_1_odds,
                    team_2_odds: msg.team_2_odds,
                    max_bet: msg.max_bet
                })
            } catch (e) {
                console.log(e)
            }

        });

        socket.on('bet_msg_from_player', msg => {
            console.log(msg);
            try {
                connectedUsers['admin'].emit('bet_msg_from_player',{
                    bank: msg.bank,
                    place_summ_t1: msg.place_summ_t1,
                    place_summ_t2: msg.place_summ_t2,
                    earn_summ_t1: msg.earn_summ_t1,
                    earn_summ_t2: msg.earn_summ_t2,
                    place_odds_t1: msg.place_odds_t1,
                    place_odds_t2: msg.place_odds_t2,
                    timer: msg.timer
                })
            } catch (e) {
                console.log('Admin page not loaded')
            }
        })

        socket.on('url_handler', msg => {
            console.log('URL HANDLER');
            try {
                connectedUsers[msg.steam_username].emit('url_handler', {
                    match_url: msg.match_url
                })
            } catch (e) {
                console.log(e)
            }
        })
    });
};