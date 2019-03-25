module.exports = (io) => {
    let user_list = [];
    let connectedUsers = {};
    let players = [];


    io.on('connection', socket => {
        console.log('Подключен пользователь');

        socket.on('login', data => {
            socket.steam_username = data.steam_username;
            if (socket.steam_username in user_list) {
                console.log('Пользователь уже зарегестрирован')
                console.log(data)
            } else {
                user_list[socket.steam_username] = data;
                connectedUsers[socket.steam_username] = socket;
                console.log(user_list);
                if (socket.steam_username === 'admin') {
                    try {
                        connectedUsers['admin'].emit('admin_reload_player_info_update', players)
                    } catch (e) {
                        console.log(e)
                    }
                }
            }
        });

        socket.on('disconnect', () => {
            let index = players.findIndex(e => e.steam_username === socket.steam_username);
            if (index !== -1) {
                players.splice(index, 1);
            }

            console.log('пользователь отключен')
            try {
                connectedUsers['admin'].emit('admin_reload_player_info_update', players)
            } catch (e) {
                console.log(e)
            }
            delete user_list[socket.steam_username];
            delete connectedUsers[socket.steam_username];

            console.log(user_list)
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
                connectedUsers['admin'].emit('bet_msg_from_player', {
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
        });

        socket.on('player_info_update', msg => {
            let index = players.findIndex(e => e.steam_username === msg.steam_username);

            try {
                if (index === -1) {
                    players.push(msg);
                    connectedUsers['admin'].emit('admin_reload_player_info_update', players)
                } else if (index !== -1) {
                    players.splice(index, 1, msg);
                    connectedUsers['admin'].emit('admin_reload_player_info_update', players)
                }

            } catch (e) {
                console.log(e)
            }
            // try {
            //     connectedUsers['admin'].emit('player_info_update', {
            //         steam_username: msg.steam_username,
            //         player_id: msg.player_id,
            //         permission: msg.permission,
            //         bank: msg.bank
            //     })
            // } catch (e) {
            //     console.log(e)
            // }
        });

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


