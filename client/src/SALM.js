const axios = require('axios')

let data = null;



const getStats = num => {
    axios.get('https://api.steampowered.com/IDOTA2Match_570/GetTopLiveGame/v1/?key=4DA49E795D91371C6C5226728380F221&partner=0')
        .then(response => {
            data = response.data

            console.log(`Radiant: ${data.game_list[num].radiant_score}`);
            console.log(`Dire: ${data.game_list[num].dire_score}`)
            console.log(`Radiant_lead: ${data.game_list[num].radiant_lead}`)
            console.log(`TIME: ${data.game_list[num].game_time}`)
            console.log(`BUILD: ${data.game_list[num].building_state}`)
        });
}


setInterval( () => {
    getStats(2)
}, 250);

//
// getStats();

