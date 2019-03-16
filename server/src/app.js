const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');


const port = process.env.PORT || '4000';
app.set('port', port)

app.use(bodyParser.json());
app.use(cors());


let user_list = {};
let connectedUsers = {};


io.on('connection', socket => {
    console.log('a user connected');

    socket.on('register', data => {
        socket.steam_username = data.steam_username;
        if (socket.steam_username in user_list) {
            console.log('User is already registered ')
        } else {
            user_list[socket.steam_username] = data;
            connectedUsers[socket.steam_username] = socket;
            console.log(user_list);
            updateUserList();
        }
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
        delete user_list[socket.steam_username];
        delete connectedUsers[socket.steam_username];
    });

    function updateUserList() {
        io.sockets.emit('user_list', user_list);
    }

    socket.on('user_list', () => {
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

    socket.on('bet_msg_from_watcher', data => {
        console.log(data)
        connectedUsers['admin'].emit('bet_msg_from_watcher', {
            match_url: data.match_url,
            t_name: data.t_name,
            team_1_name: data.team_1_name,
            team_2_name: data.team_2_name,
            bo: data.bo,
            map_num_info: data.map_num_info,
            koef_t1: data.koef_t1,
            koef_t2: data.koef_t2,
        })
    })

    socket.on('bet_msg_from_player', data => {
        console.log(data);
        try {
            connectedUsers['admin'].emit({
                bank: data.bank
            })
        } catch (e) {
            console.log('Admin page not loaded')
        }
    })
});


app.use(express.static(path.join(__dirname, '../client')));

server.listen(port, () => {
    console.log(`Running on ${port}`)
});


