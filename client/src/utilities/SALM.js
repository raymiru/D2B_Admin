const axios = require('axios');

const Dota2Api = require('dota2-api');

const da = Dota2Api.create('4DA49E795D91371C6C5226728380F221', 570)


const options = {partner: 3};

const ALL = () => {
    da.getTopLiveGame(options).then((result) => {
        result.game_list.forEach(elem => {
            console.log(elem.team_name_radiant);
            console.log(elem.radiant_score);
            console.log(elem.team_name_dire);
            console.log(elem.dire_score);
            console.log(elem.building_state);
        })
    }, (errorResponseStatusText) => {
        console.log(errorResponseStatusText);
    });
}

ALL()


const watchGame = match_id => {
    da.getTopLiveGame(options).then((result) => {
        result.game_list.forEach(elem => {
            if (elem.match_id === match_id ) {
                console.log(elem.team_name_radiant);
                console.log(elem.radiant_score);
                console.log(elem.team_name_dire);
                console.log(elem.dire_score);
                console.log(elem.building_state);
            }
        })
    }, (errorResponseStatusText) => {
        console.log(errorResponseStatusText);
    });
}

watchGame(4789174024);

const TSG = () => {
    da.getTopLiveGame(options).then((result) => {
        console.log(result.game_list[0].team_name_radiant);
        console.log(result.game_list[0].radiant_score);
        console.log(result.game_list[0].team_name_dire);
        console.log(result.game_list[0].dire_score);
        console.log(result.game_list[0].building_state);
    }, (errorResponseStatusText) => {
        console.log(errorResponseStatusText);
    });
}







const getStats = num => {
    axios.get('https://api.steampowered.com/IDOTA2Match_570/GetTopLiveGame/v1/?key=4DA49E795D91371C6C5226728380F221&partner=0')
        .then(response => {
            data = response.data
            console.log(data)
            // console.log(`Radiant: ${data.game_list[num].radiant_score}`);
            // console.log(`Dire: ${data.game_list[num].dire_score}`)
            // console.log(`Radiant_lead: ${data.game_list[num].radiant_lead}`)
            // console.log(`TIME: ${data.game_list[num].game_time}`)
            // console.log(`BUILD: ${data.game_list[num].building_state}`)
        });
}

const getMatchDetails = () => {
    axios.get('https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/v1?key=4DA49E795D91371C6C5226728380F221&partner=0&match_id=4788667144')
        .then(response => {
            console.log(response.data)
        })
}


// setInterval( () => {
//     getStats(2)
// }, 250);

//


