const compareRandom = () => {
    return Math.random() - 0.5;
};

export const randomFromPlayersArray = (freePlayersIds, needPlayersInMatch, ) => {
    console.log(`Free Players Ids : ${freePlayersIds}`)
    freePlayersIds.sort(compareRandom);
    let matchPlayers = [];

    for (let i = 0; i < freePlayersIds.length; i++) {

        if (matchPlayers.length < needPlayersInMatch) {
            matchPlayers.push(freePlayersIds[i]);
            freePlayersIds.splice(i, 1);
            i--
        }
    }
    console.log(matchPlayers)
    return matchPlayers
};

