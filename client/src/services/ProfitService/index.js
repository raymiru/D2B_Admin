const Chance = require('chance');
const chance = new Chance();

const start = (players) => {
    console.log(players)
};


const firstBet = (players, needBetPlayers) => {
    let inPlayers = [];
    const betPlayers = [];
    const nothingPlayers = [];
    if (chance.bool()) {
        inPlayers = players.reverse();
    } else inPlayers = players;


    inPlayers.forEach(player => {
        if (chance.bool()) {
            if (betPlayers.length < needBetPlayers) {
                betPlayers.push(player)
            } else nothingPlayers.push(player)
        } else {
            nothingPlayers.push(player)
        }
    });

    if (betPlayers.length < needBetPlayers) {
        nothingPlayers.forEach(player => {
            if (betPlayers.length < needBetPlayers) betPlayers.push(player)
        })
    }

    return betPlayers;
};

console.log(firstBet([1, 4, 5, 7, 8, 12, 13, 15, 18, 24], 5));
// start([1, 4, 5, 7, 8, 12, 13, 15, 18, 24]);
