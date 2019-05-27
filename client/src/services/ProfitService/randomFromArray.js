const compareRandom = () => {
    return Math.random() - 0.5;
};

export const randomFromPlayersArray = (freePlayers, needPlayersInMatch, match) => {
    freePlayers.sort(compareRandom);
    let matchPlayers = [];

    for (let i = 0; i < freePlayers.length; i++) {

        if (matchPlayers.length < needPlayersInMatch) {
            matchPlayers.push(freePlayers[i]);
            freePlayers.splice(i, 1);
            i--
        }
    }
    return matchPlayers
};

