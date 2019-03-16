const socket = io()



let users = {};

document.addEventListener('DOMContentLoaded', e => {
    e.preventDefault();
    socket.emit('register', {
        user_id: 0,
        steam_username: 'admin',
        permission: 'admin'
    })
});


function betNetworkHandler(e) {
    e.preventDefault();
    socket.emit('bet_msg_to_player', {
        steam_username: document.querySelector('#steam_username').value,
        team_winner: document.querySelector('#team_winner').value,
        bet_val: document.querySelector('#val').value
    })
}


function usersListHandler(e) {
    e.preventDefault();
    socket.emit('user_list')
}

let im = document.querySelector('#myName');
let from = document.querySelector('#from');
let to = document.querySelector('#to');
let msgInput = document.querySelector('#msg');


document.querySelector("#bet").addEventListener('submit', betNetworkHandler);
document.querySelector("#user_list").addEventListener('submit', usersListHandler);

