<template lang="html">
    <v-content>
        <v-container fluid style="background: linear-gradient(left, #F2C14E, #F78154);" class="text-md-center">
            <v-layout row wrap>
                <v-flex md4 sm4>
                    <v-layout v-if="!reverseTeams" v-on:click="chooseWinner(1)"
                              class="team_card radiant" v-bind:class="{active_team_card: winner === 1}">
                        <v-flex md8>
                            <div>{{team_1_name}}</div>
                        </v-flex>
                        <v-flex md4>
                            <img height="180" style="display: block; margin: 0 100px 300px -30px"
                                 v-bind:src="team_1_img"/>
                        </v-flex>
                    </v-layout>
                    <v-layout v-else-if="reverseTeams === true" v-on:click="chooseWinner(2)"
                              v-bind:class="{active_team_card: winner === 2}"
                              class="team_card radiant">

                        <v-flex md8>
                            <div>{{team_2_name}}</div>
                        </v-flex>
                        <v-flex md4>
                            <img height="180" style="display: block; margin: 0 100px 300px -30px"
                                 v-bind:src="team_2_img"/>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex md12 ma-3 class="text-md-center">
                            <v-btn dark type="button" v-on:click="urlHandler" fab class="v-btn--large"
                                   v-bind:class="{'url-transition': url_transition}">
                                <v-icon dark>refresh</v-icon>
                            </v-btn>
                            <span class="mx-3">|</span>

                            <v-btn v-on:click="reverseTeams = !reverseTeams" type="button">Reverse</v-btn>


                        </v-flex>
                    </v-layout>
                </v-flex>

                <v-flex md4 sm4>
                    <div>
                        <v-layout style="margin: -8px 8px !important;" row wrap>

                            <v-flex md6 pa-2 v-if="!reverseTeams">
                                <div class="odds">{{team_1_odds}}</div>
                            </v-flex>
                            <v-flex md6 pa-2 v-else="reverseTeams">
                                <div class="odds">{{team_2_odds}}</div>
                            </v-flex>
                            <v-flex md6 pa-2 v-if="!reverseTeams">
                                <div class="odds">{{team_2_odds}}</div>
                            </v-flex>
                            <v-flex md6 pa-2 v-else="reverseTeams">
                                <div class="odds">{{team_1_odds}}</div>
                            </v-flex>
                            <v-flex md12>
                                <v-form
                                        @submit="placeBet"
                                        row wrap
                                >
                                    <v-flex class="ma-2" md12 d-inline-flex>

                                        <v-flex>
                                            <v-btn type="button"
                                                   v-on:click="changeBetPower(0.1)"
                                                   class="v-btn--small" fab>
                                                10%
                                            </v-btn>
                                        </v-flex>
                                        <v-flex>
                                            <v-btn type="button"
                                                   v-on:click="changeBetPower(0.2)"
                                                   class="v-btn--small" fab>
                                                20%
                                            </v-btn>
                                        </v-flex>
                                        <v-flex>
                                            <v-btn type="button"
                                                   v-on:click="changeBetPower(0.3)"
                                                   class="v-btn--small" fab>
                                                30%
                                            </v-btn>
                                        </v-flex>

                                        <v-flex>
                                            <v-btn type="button"
                                                   v-on:click="changeBetPower(0.4)"
                                                   class="v-btn--small" fab>
                                                40%
                                            </v-btn>
                                        </v-flex>
                                        <v-flex>
                                            <v-btn type="button"
                                                   v-on:click="changeBetPower(0.5)"
                                                   class="v-btn--small" fab>
                                                50%
                                            </v-btn>
                                        </v-flex>
                                        <v-flex>
                                            <v-btn type="button"
                                                   v-on:click="changeBetPower(0.6)"
                                                   class="v-btn--small" fab>
                                                60%
                                            </v-btn>
                                        </v-flex>
                                        <v-flex>
                                            <v-btn type="button"
                                                   v-on:click="changeBetPower(0.7)"
                                                   class="v-btn--small" fab>
                                                70%
                                            </v-btn>
                                        </v-flex>
                                        <v-flex>
                                            <v-btn type="button"
                                                   v-on:click="changeBetPower(0.8)"
                                                   class="v-btn--small" fab>
                                                80%
                                            </v-btn>
                                        </v-flex>
                                        <v-flex>
                                            <v-btn type="button"
                                                   v-on:click="changeBetPower(0.9)"
                                                   class="v-btn--small" fab>
                                                90%
                                            </v-btn>
                                        </v-flex>
                                        <v-flex>
                                            <v-btn dark type="button" style="font-size: 18px"
                                                   v-on:click="changeBetPower(1)"
                                                   fab>100%
                                            </v-btn>
                                        </v-flex>

                                    </v-flex>
                                    <v-flex>
                                        <v-layout>
                                            <v-flex v-if="!place_bet_pressed && bet_permission" md12>
                                                <v-btn type="submit"
                                                       style="height: 60px; font-size: 26px"
                                                       class="v-btn--large bet-button" block dark>BET: {{bet_power *
                                                    100}}%
                                                </v-btn>
                                            </v-flex>

                                            <v-flex v-if="!bet_permission" md12>
                                                <v-btn type="submit"
                                                       style="height: 60px; font-size: 26px"
                                                       class="v-btn--large disable-events" block dark>BET: {{bet_power *
                                                    100}}%
                                                </v-btn>
                                            </v-flex>
                                            <v-flex v-else-if="place_bet_pressed">
                                                <v-layout>
                                                    <v-flex md9>
                                                        <v-btn type="button"
                                                               style="height: 60px; font-size: 26px"
                                                               class="v-btn--large  disable-events" block dark>
                                                            {{seconds}}
                                                        </v-btn>
                                                    </v-flex>
                                                    <v-flex md3>

                                                        <v-btn style="height: 60px; font-size: 16px"
                                                               v-on:click="removeTimer"
                                                               dark
                                                               type="button">Remove Timer
                                                        </v-btn>
                                                    </v-flex>
                                                </v-layout>
                                            </v-flex>
                                        </v-layout>

                                    </v-flex>


                                </v-form>
                            </v-flex>
                        </v-layout>
                    </div>
                    <v-card align-center style="height: 100px;" v-bind:class="{vilka: vilka === 1}">
                        <v-layout align-center justify-center row fill-height ma-3
                        >
                            <v-flex xs12 row style="">
                                <v-layout>
                                    <v-card-text style="background-color: #ff6156">MAX: {{max_bet}}</v-card-text>
                                    <v-card-text style="background-color: yellow">BET: {{total_bet}}</v-card-text>
                                    <v-card-text style="background-color: green; color: white">P.WIN: {{total_pwin}}</v-card-text>
                                    <v-card-text style="background-color: burlywood; ">ACTIVE: {{active_players_count}}</v-card-text>


                                </v-layout>

                            </v-flex>
                        </v-layout>
                    </v-card>
                    <v-card v-if="!reverseTeams" align-center style="height: 100px;" v-bind:class="{vilka: vilka === 1}">
                        <v-layout align-center justify-center row fill-height ma-3
                        >
                            <v-flex xs6 row style="border-right: 1px solid black">
                                <v-layout xs6>
                                    <v-card-text style="background-color: yellow">{{this.match_bet_stats.team_1_bet.total_bet}}</v-card-text>
                                    <v-card-text style="background-color: burlywood">{{this.total_odds_team1}}</v-card-text>

                                    <v-card-text style="background-color: green; color: white">{{this.match_bet_stats.team_1_bet.total_pwin.toFixed(1)}}</v-card-text>
                                </v-layout>
                            </v-flex>
                            <v-divider></v-divider>
                            <v-flex xs6>
                                <v-layout xs6>
                                    <v-card-text style="background-color: yellow">{{this.match_bet_stats.team_2_bet.total_bet}}</v-card-text>
                                    <v-card-text style="background-color: burlywood">{{this.total_odds_team2}}</v-card-text>

                                    <v-card-text style="background-color: green; color: white">{{this.match_bet_stats.team_2_bet.total_pwin.toFixed(1)}}</v-card-text>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                    </v-card>
                    <v-card v-else-if="reverseTeams" align-center style="height: 100px;" v-bind:class="{vilka: vilka === 1}">
                        <v-layout align-center justify-center row fill-height ma-3
                        >
                            <v-flex xs6>
                                <v-layout xs6>
                                    <v-card-text style="background-color: yellow">{{this.match_bet_stats.team_2_bet.total_bet}}</v-card-text>
                                    <v-card-text style="background-color: burlywood">{{this.total_odds_team2}}</v-card-text>

                                    <v-card-text style="background-color: green; color: white">{{this.match_bet_stats.team_2_bet.total_pwin}}</v-card-text>
                                </v-layout>
                            </v-flex>
                            <v-divider></v-divider>
                            <v-flex xs6 row style="border-right: 1px solid black">
                                <v-layout xs6>
                                    <v-card-text style="background-color: yellow">{{this.match_bet_stats.team_1_bet.total_bet.toFixed(1)}}</v-card-text>
                                    <v-card-text style="background-color: burlywood">{{this.total_odds_team1}}</v-card-text>

                                    <v-card-text style="background-color: green; color: white">{{this.match_bet_stats.team_1_bet.total_pwin.toFixed(1)}}</v-card-text>
                                </v-layout>
                            </v-flex>


                        </v-layout>
                    </v-card>
                </v-flex>
                <v-flex md4 sm4>
                    <v-layout v-if="!reverseTeams" v-on:click="chooseWinner(2)"
                              v-bind:class="{active_team_card: winner === 2}"
                              class="team_card dire">
                        <v-flex md4>
                            <img height="180" style="display: block; margin: 0 100px 300px 0"
                                 v-bind:src="team_2_img"/>
                        </v-flex>
                        <v-flex md8>
                            <div>{{team_2_name}}</div>
                        </v-flex>

                    </v-layout>

                    <v-layout v-else-if="reverseTeams === true" v-on:click="chooseWinner(1)"
                              class="team_card dire" v-bind:class="{active_team_card: winner === 1}">

                        <v-flex md4>
                            <img height="180" style="display: block; margin: 0 100px 300px 0"
                                 v-bind:src="team_1_img"/>
                        </v-flex>
                        <v-flex md8>
                            <div>{{team_1_name}}</div>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>


    import {calcDelay} from "../services/ProfitService/calcDelay";
    import {bus} from "../services/bus";
    import {randomBetArray} from "../services/ProfitService/randomBetArray";
    import {randomFromPlayersArray} from "../services/ProfitService/randomFromArray";
    import Chance from 'chance';

    const chance = new Chance();

    export default {
        name: 'Match',
        data() {
            return {
                match_bet_stats: {
                    team_1_bet: {
                        total_bet: 0,
                        total_odds: 0,
                        total_pwin: 0,
                    },
                    team_2_bet :{
                        total_bet: 0,
                        total_odds: 0,
                        total_pwin: 0,
                    }
                },
                inactive_players_obj: {},
                bet_power: 1,
                reverseTeams: false,
                match_id: '',
                match_players: [],
                active_players: [],
                active_players_count: 0,
                inactive_players: [],
                inactive_players_count: 0,
                match_url: '',
                url_transition: false,
                team_1_name: undefined,
                team_2_name: undefined,
                team_1_img: undefined,
                team_2_img: undefined,
                team_1_odds: 0,
                team_2_odds: 0,
                p_win: 0,
                max_bet: 10,
                winner: 0,
                bet_value: 0,
                timer: false,
                place_bet_pressed: false,
                seconds: 0,
                intervals: [],
                bet_button: false,

            }
        },
        props: {
            players: Array,
            usd: Number
        },

        created() {
            bus.$on('match3', () => {
                if (localStorage['match3-players-ids']) {
                    let matchPlayersIds = JSON.parse(localStorage['match3-players-ids']);
                    this.players.forEach(elem => {
                        matchPlayersIds.forEach(el => {
                            if (elem.player_id == el) {
                                this.match_players.push(elem)
                                console.log(this.match_players)
                            }
                        })
                    })
                    this.match_players.forEach(elem => {
                        this.active_players.push(elem)
                    })
                    localStorage['match3-active-players'] = JSON.stringify(this.active_players)

                } else {
                    this.match_players = [];
                    this.active_players = [];
                    console.log(this.match_players)
                }
            })


            if (localStorage['match3-players-ids']) {
                let matchPlayersIds = JSON.parse(localStorage['match3-players-ids']);
                this.players.forEach(elem => {
                    matchPlayersIds.forEach(el => {
                        if (elem.player_id == el) {
                            this.match_players.push(elem)
                            console.log(this.match_players)
                        }
                    })
                })
            } else {
                this.match_players = []
                console.log(this.match_players)
            }

            if (localStorage['match3-active-players']) {
                this.active_players = JSON.parse(localStorage['match3-active-players']);
            } else this.match_players.forEach(elem => {
                this.active_players.push(elem)
            })


        },


        watch: {
            match_players: function () {


                setTimeout(() => {
                    this.match_bet_stats.team_1_bet.total_bet = 0;
                    this.match_bet_stats.team_1_bet.total_pwin = 0;
                    this.match_bet_stats.team_2_bet.total_bet = 0;
                    this.match_bet_stats.team_2_bet.total_pwin = 0;

                    this.match_players.forEach(elem => {

                        this.match_bet_stats.team_1_bet.total_bet+=parseFloat(elem.team_1_bet.total_bet);
                        this.match_bet_stats.team_1_bet.total_pwin+=parseFloat(elem.team_1_bet.total_pwin);
                        this.match_bet_stats.team_2_bet.total_bet+=parseFloat(elem.team_2_bet.total_bet);
                        this.match_bet_stats.team_2_bet.total_pwin+=parseFloat(elem.team_2_bet.total_pwin);
                    })




                }, 100)
            },


            players: function () {
                if (localStorage['match3-players-ids']) {
                    let matchPlayersIds = JSON.parse(localStorage['match3-players-ids']);
                    console.log('STEP !');
                    this.match_players = [];
                    this.players.forEach(elem => {
                        matchPlayersIds.forEach(el => {
                            if (elem.player_id == el) {
                                this.match_players.push(elem)
                                console.log('STEP 2')
                                console.log(this.match_players)
                            }
                        })
                    })
                } else {
                    this.match_players = []
                    console.log(this.match_players)
                }
            },

            active_players: function () {
                this.active_players_count = 0;
                this.active_players.forEach(elem => {
                    this.active_players_count++
                })
            },

            match_url: function () {
                this.url_transition = true
            },

            winner: function (data) {

                if (data == 1) {
                    this.$socket.emit('msg_to_watcher', {
                        steam_username: JSON.parse(localStorage['match3-watcher'])[0].steam_username,
                        team_winner: data,
                    })
                } else if (data == 2) {
                    this.$socket.emit('msg_to_watcher', {
                        steam_username: JSON.parse(localStorage['match3-watcher'])[0].steam_username,
                        team_winner: data,
                    })
                }

            }
        },


        sockets: {


            bet_msg_from_watcher: function (data) {
                try {
                    if (data.player_id == JSON.parse(localStorage['match3-watcher-id'])[0]) {
                        if (data.match_url) this.match_url = data.match_url;
                        if (data.team_1_name) this.team_1_name = data.team_1_name;
                        if (data.team_2_name) this.team_2_name = data.team_2_name;
                        if (data.team_1_odds) this.team_1_odds = data.team_1_odds.slice(1);
                        if (data.team_2_odds) this.team_2_odds = data.team_2_odds.slice(1);
                        if (data.t_name) this.t_name = data.t_name;
                        if (data.bo) this.bo = data.bo;
                        if (data.map_num_info) this.map_num_info = data.map_num_info;
                        if (data.max_bet) this.max_bet = parseInt(data.max_bet);
                        if (data.team_1_img) this.team_1_img = data.team_1_img;
                        if (data.team_2_img) this.team_2_img = data.team_2_img
                    }
                } catch (e) {
                    console.log('match3-watcher-id LS отсутствует')
                }


            },
            bet_msg_from_player: function (data) {
                if (data.timer === true && this.timer === false) this.timer = true
            },

            user_list: function (data) {
                this.user_list = data.user_list
                let count = 0
                for (let prop in data) {
                    if (data[prop].permission === "player") {
                        this.user_list[count] = data[prop].steam_username;
                        count++;
                    }
                }
            }
        },

        methods: {
            changeBetPower(power) {
                this.bet_power = power
                console.log(this.bet_power)
            },


            chooseWinner(t_winner) {
                this.winner = t_winner;
            },

            placeBet(e) {
                e.preventDefault();
                if (this.winner) {


                    console.log('placeBet pressed');
                    this.place_bet_pressed = true;
                    this.seconds = 60;
                    this.timerOn();

                    let rbObj = {};
                    let rbArray = [];
                    let betPlayersCount = 0;
                    let betPlayersArrayIds = [];
                    let activePlayersIdsArray = [];

                    this.active_players.forEach(elem => {
                        activePlayersIdsArray.push(elem.player_id)
                    })


                    rbObj = randomBetArray(this.bet_power, this.max_bet, this.active_players_count);
                    rbArray = rbObj.genRBArray;
                    betPlayersCount = rbObj.betAccCount;


                    console.log(rbArray);
                    console.log(betPlayersCount);

                    betPlayersArrayIds = randomFromPlayersArray(activePlayersIdsArray, betPlayersCount);

                    console.log(calcDelay(this.bet_power, betPlayersCount));
                    console.log(betPlayersArrayIds)

                    // this.match_players.forEach((elem, index, array) => {
                    //     betPlayersArrayIds.forEach((el, elIndex, elArray) => {
                    //         if (elem.player_id == el) {
                    //             elem.bet_size = rbArray[elIndex]
                    //         }
                    //     })
                    // })
                    //
                    // console.log(this.match_players)

                    let randomWord = '';
                    randomWord = chance.word();
                    this.inactive_players_obj[randomWord] = [];
                    console.log(`WORD IS: ${randomWord}`)

                    for (let i = 0; i < betPlayersArrayIds.length; i++) {
                        for (let z = 0; z < this.active_players.length; z++) {
                            if (betPlayersArrayIds[i] == this.active_players[z].player_id) {
                                this.$socket.emit('bet_msg_to_player', {
                                    steam_username: this.active_players[z].steam_username,
                                    team_winner: this.winner,
                                    bet_val: rbArray[i],
                                    delay: calcDelay(this.bet_power)[0]
                                })
                                this.inactive_players_obj[randomWord].push(this.active_players[z]);
                                this.active_players.splice(z, 1);
                                z--;
                            }
                        }
                    }

                    setTimeout(() => {


                        for (let i = 0; i < this.inactive_players_obj[randomWord].length; i++) {
                            this.active_players.push(this.inactive_players_obj[randomWord][i]);

                        }

                        for (let i = 0; i < this.inactive_players_obj[randomWord].length; i++) {
                            this.inactive_players_obj[randomWord].splice(i, 1);
                            i--;

                        }

                        console.log(`INACTIVE PLAYERS: ${this.inactive_players}`);
                        console.log(`ACTIVE PLAYERS: ${this.active_players}`);

                    }, 60000)


                    // betPlayersArrayIds.forEach((elem, index,array) => {
                    //     this.active_players.forEach((el, elIndex, elArray) => {
                    //         if (elem == el.player_id) {
                    //             this.inactive_players.push(elem)
                    //             elArray.splice(index,1);
                    //             elIndex = 0;
                    //             console.log('ELEM DELETE')
                    //         }
                    //     })
                    // })
                    //
                    //
                    //


                    // this.players.forEach(element => {
                    //
                    //     this.$socket.emit('bet_msg_to_player', {
                    //         steam_username: element.steam_username,
                    //         team_winner: this.winner,
                    //         bet_val: this.bet_val
                    //     })
                    // });

                } else alert('НЕ ВЫБРАНА КОМАНДА ИЛИ НЕ ВВЕДЕНА СУММА СТАВКИ');
            },
            timerOn() {

                console.log('TIMER')
                this.intervals = []
                let interval = setInterval(() => {
                    if (this.seconds > 0) {
                        this.seconds--;
                    } else {
                        console.log(this.seconds)
                        clearInterval(interval);
                        this.place_bet_pressed = false;
                    }
                }, 1000);
                this.intervals.push(interval)
            },

            removeTimer() {
                this.intervals.forEach(clearInterval);
                this.place_bet_pressed = false
            },


            urlHandler() {
                console.log('URL HANDLER: ');
                this.url_transition = false;
                this.match_players.forEach(element => {
                    console.log(element.steam_username);
                    this.$socket.emit('url_handler', {
                        steam_username: element.steam_username,
                        match_url: this.match_url
                    })
                })
                this.$socket.emit('url_handler', {
                    steam_username: JSON.parse(localStorage['match3-watcher'])[0].steam_username,
                    match_url: this.match_url
                })
            },


            'dota2_scoreboard.win_side': function (data) {


                console.log(data)
                document.querySelector('#app > div.application--wrap > main').classList.add('gradient');
                document.querySelector(`.${data}`).setAttribute('style', 'background-color: #208ee6');

            },
            'dota2_scoreboard.dire.dire_gold_lead': function () {
                if (this.dota2_scoreboard.dire.dire_gold_lead < 0) {
                    this.dota2_scoreboard.dire.dire_gold_lead = '--'
                }
            },
            'dota2_scoreboard.radiant.radiant_gold_lead': function () {
                if (this.dota2_scoreboard.radiant.radiant_gold_lead < 0) {
                    this.dota2_scoreboard.radiant.radiant_gold_lead = '--'
                }
            }
        }
        ,


        computed: {
            bet_permission: function () {
                return !!(this.winner);
            },

            total_bet: function () {
                return Math.round(this.active_players_count * this.max_bet * this.bet_power)
            },

            total_pwin: function () {
                if (this.winner === 1) {
                    return Math.round(this.total_bet * this.team_1_odds - this.total_bet)
                }
                if (this.winner === 2) {
                    return Math.round(this.total_bet * this.team_2_odds - this.total_bet)
                }
            },

            vilka: function () {
                if (this.match_bet_stats.team_1_bet.total_bet < this.match_bet_stats.team_2_bet.total_pwin && this.match_bet_stats.team_1_bet.total_pwin >this.match_bet_stats.team_2_bet.total_bet) {
                    return 1
                } else return 0
            },

            total_odds_team1: function () {
                return ((this.match_bet_stats.team_1_bet.total_pwin + this.match_bet_stats.team_1_bet.total_bet)/this.match_bet_stats.team_1_bet.total_bet).toFixed(2)
            },

            total_odds_team2: function () {
                return ((this.match_bet_stats.team_2_bet.total_pwin + this.match_bet_stats.team_2_bet.total_bet)/this.match_bet_stats.team_2_bet.total_bet).toFixed(2)
            }

        }
    }
</script>

<style lang="css">
    #app {
        font-size: 17px;
        line-height: 1.4em;
    }

    .team_card {
        box-shadow: 0 3px 10px #4e5869;
        height: 192px;
        border-radius: 5px;
        background-color: #c9ccc3;
        cursor: pointer;
        font-size: 36px;
        line-height: 5.4em;
    }


    .active_team_card {

        background-color: #d99b58;
        /* IE9, iOS 3.2+ */
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxsaW5lYXJHcmFkaWVudCBpZD0idnNnZyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIHN0b3AtY29sb3I9IiNjYTUyNTIiIHN0b3Atb3BhY2l0eT0iMSIgb2Zmc2V0PSIwIi8+PHN0b3Agc3RvcC1jb2xvcj0iI2U3ZTQ1ZSIgc3RvcC1vcGFjaXR5PSIxIiBvZmZzZXQ9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjdnNnZykiIC8+PC9zdmc+);
        background-image: -webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0, rgb(202, 82, 82)), color-stop(1, rgb(231, 228, 94)));
        /* Android 2.3 */
        background-image: -webkit-repeating-linear-gradient(top left, rgb(202, 81, 82) -0.8%, rgb(231, 228, 94) 100%);
        /* IE10+ */
        background-image: repeating-linear-gradient(to bottom right, rgb(202, 81, 82) -0.8%, rgb(231, 228, 94) 100%);
        background-image: -ms-repeating-linear-gradient(top left, rgb(202, 81, 82) -0.8%, rgb(231, 228, 94) 100%);
    }

    /* IE8- CSS hack */
    @media \0screen\,screen\9 {
        .gradient {
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffca5152", endColorstr="#ffe7e45e", GradientType=0);
        }
    }


    .bet-button {
        height: 120px;
        font-size: 26px
    }

    .odds {
        line-height: 1.2em;
        border-radius: 5px;
        background-color: #c9ccc3;
        font-size: 28px;
        box-shadow: 0 3px 6px #4e5869;
    }

    .max_bet {
        font-size: 24px;
    }

    .radiant_score {
        border-radius: 5px;
        background-color: #44803a;
        color: white;
        box-shadow: 0 3px 6px #4e5869;
    }

    .radiant-map {
        border-radius: 5px;
        background-color: #44803a;
        color: white;
        box-shadow: 0 3px 6px #4e5869;
    }

    .radiant_gold_lead {
        border-radius: 5px;
        background-color: #44803a;
        color: white;
        box-shadow: 0 3px 6px #4e5869;
    }

    .dire_score {
        border-radius: 5px;
        background-color: #803237;
        color: white;
        box-shadow: 0 3px 6px #4e5869;
    }

    .time {
        border-radius: 5px;
        background-color: #3129cc;
        box-shadow: 0 3px 6px #4e5869;
        color: white;
    }

    .dire-map {
        border-radius: 5px;
        background-color: #803237;
        color: white;
        box-shadow: 0 3px 6px #4e5869;

    }

    .dire_gold_lead {
        border-radius: 5px;
        background-color: #803237;
        color: white;
        box-shadow: 0 3px 6px #4e5869;
    }

    ul.tower li {
        display: inline;
        margin-left: 10px;
        margin-right: 10px;

    }

    ul.tower2 li {
        display: inline;
        margin-right: 10px;
        margin-left: 10px;

    }

    ul.barrack li {
        display: inline;
        margin-left: 3px;
        margin-right: 3px;

    }

    .disable-events {
        pointer-events: none;
        opacity: 0.6;
    }

    .gradient {
        background-color: #72959a;
        /* IE9, iOS 3.2+ */
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxsaW5lYXJHcmFkaWVudCBpZD0idnNnZyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxNi45JSIgeTE9IjEwOC4xJSIgeDI9IjgzLjElIiB5Mj0iLTguMSUiPjxzdG9wIHN0b3AtY29sb3I9IiNkZmM4YmEiIHN0b3Atb3BhY2l0eT0iMSIgb2Zmc2V0PSIwIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzAzNjA3OCIgc3RvcC1vcGFjaXR5PSIxIiBvZmZzZXQ9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjdnNnZykiIC8+PC9zdmc+);
        background-image: -webkit-gradient(linear, 16.9% 108.1%, 83.1% -8.1%, color-stop(0, rgb(223, 200, 186)), color-stop(1, rgb(3, 96, 120)));
        /* Android 2.3 */
        background-image: -webkit-repeating-linear-gradient(63deg, rgb(225, 201, 187) -0.8%, rgb(3, 96, 120) 100%);
        /* IE10+ */
        background-image: repeating-linear-gradient(27deg, rgb(225, 201, 187) -0.8%, rgb(3, 96, 120) 100%);
        background-image: -ms-repeating-linear-gradient(63deg, rgb(225, 201, 187) -0.8%, rgb(3, 96, 120) 100%);
    }

    /* IE8- CSS hack */
    @media \0screen\,screen\9 {
        .gradient {
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff036078", endColorstr="#ffe1c9bb", GradientType=0);
        }
    }


    .url-transition {
        background-color: green !important;
    }

    .vilka {
        background-color: #9ccc65 !important;
    }

</style>
