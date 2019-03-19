<template lang="html">
    <v-app style="background-color: #00bcd4">
        <v-container fluid style="background-color: whitesmoke;" class="text-md-center">
            <v-layout row wrap>
                <v-flex md4 sm12 class="pa-5">
                    <v-layout v-on:click="chooseWinner(1)"
                              class="team_card " v-bind:class="{active_team_card: winner === 1}" row wrap>
                        <v-flex  md8>
                            <div >{{team_1_name}}</div>
                        </v-flex>
                        <v-flex md4>
                            <img alt="q" height="200" style="display: block; margin: 40px 100px 300px -30px" v-bind:src="team_1_img"/>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex md4 sm12>
                    <div class="pa-3">
                        <v-layout row wrap>
                            <!--<v-flex md12>-->
                            <!--<div>{{t_name}}</div>-->
                            <!--</v-flex>-->
                            <v-flex md12>
                                <div>{{map_num_info}}</div>
                            </v-flex>
                            <v-flex md12>
                                <div>{{bo}}</div>
                            </v-flex>
                            <v-flex md12>
                                <div class="max_bet">Max bet: {{max_bet}}$</div>
                            </v-flex>
                            <v-flex md6 pa-3>
                                <div class="odds">{{team_1_odds}}</div>
                            </v-flex>
                            <v-flex md6 pa-3>
                                <div class="odds">{{team_2_odds}}</div>
                            </v-flex>
                            <v-flex md12>
                                <v-form
                                        @submit="placeBet"
                                        row wrap
                                >
                                    <v-flex class="ma-4" md12 d-inline-flex>


                                        <v-flex>
                                            <v-text-field
                                                    style="font-size: 28px"
                                                    v-model="bet_value"
                                                    label="BET VALUE"
                                            ></v-text-field>
                                        </v-flex>
                                        <v-flex>
                                            <v-btn type="button" v-on:click="setMaxBet" fab >Max</v-btn>
                                        </v-flex>

                                    </v-flex>
                                    <v-flex>
                                        <v-btn type="submit" class="v-btn--large bet-button"  block dark>{{seconds}}</v-btn>
                                    </v-flex>



                                </v-form>
                            </v-flex>
                        </v-layout>
                    </div>
                </v-flex>
                <v-flex md4 sm12 class="pa-5">
                    <v-layout v-on:click="chooseWinner(2)" v-bind:class="{active_team_card: winner === 2}"
                              class="team_card" row wrap>
                        <v-flex md4>
                            <img alt="q" height="200" style="display: block; margin: 40px 100px 300px 0" v-bind:src="team_2_img"/>
                        </v-flex>
                        <v-flex  md8>
                            <div >{{team_2_name}}</div>
                        </v-flex>

                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container fluid style="background-color: #9ccc65; height: 100%">
            <v-layout>
                <v-flex md9>
                    <div class="ma-4"><v-btn type="button" v-on:click="urlHandler" fab class="v-btn--large">URL</v-btn>
                        <v-btn v-on:click="userList()" class="ma-4">User-list</v-btn></div>
                </v-flex>

            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                match_url: 'Watcher not started yet',
                team_1_name: undefined,
                team_2_name: undefined,
                team_1_img: undefined,
                team_2_img: undefined,
                team_1_odds: 0,
                team_2_odds: 0,
                t_name: 'Championship name',
                map_num_info: 'map_num_info',
                bo: 'bo_info',
                max_bet: 0,
                winner: 0,
                bet_value: undefined,
                timer: false,
                seconds: 'PLACE BET',
                bet_button: false,
                user_list: []
            }
        },
        created() {
            this.$socket.emit('login', {
                user_id: 0,
                steam_username: 'admin',
                permission: 'admin'
            });



        },
        sockets: {
            bet_msg_from_watcher: function (data) {
                if (data.match_url) this.match_url = data.match_url;
                if (data.team_1_name) this.team_1_name = data.team_1_name;
                if (data.team_2_name) this.team_2_name = data.team_2_name;
                if (data.team_1_odds) this.team_1_odds = data.team_1_odds;
                if (data.team_2_odds) this.team_2_odds = data.team_2_odds;
                if (data.t_name) this.t_name = data.t_name;
                if (data.bo) this.bo = data.bo;
                if (data.map_num_info) this.map_num_info = data.map_num_info;
                if (data.max_bet) this.max_bet = data.max_bet;
                if (data.team_1_img) this.team_1_img = data.team_1_img;
                if (data.team_2_img) this.team_2_img = data.team_2_img
            },
            bet_msg_from_player: function(data) {
                if (data.timer === true && this.timer === false) this.timer = true
            },

            user_list: function (data) {
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
            chooseWinner(t_winner) {
                this.winner = t_winner;
            },

            placeBet(e) {
                e.preventDefault();

                this.user_list.forEach(element => {
                    console.log(element)
                    this.$socket.emit('bet_msg_to_player', {
                        steam_username: element,
                        team_winner: this.winner,
                        bet_val: this.bet_value
                    })
                });
                this.seconds = 60;

                let interval = setInterval(()=>{
                    if (this.seconds > 0) {
                        this.seconds--
                    }
                }, 1000)


                setTimeout(() => {
                    clearInterval(interval);
                    this.seconds = 'PLACE BET'
                }, 60000);


            },
            setMaxBet() {
                console.log('MAX BET')
                this.bet_value = this.max_bet
                this.$socket.emit('dota2_match', 4545430533)
            },
            urlHandler() {
                console.log('URL HANDLER')
                this.user_list.forEach(element => {
                    console.log(element)
                    this.$socket.emit('url_handler', {
                        steam_username: element,
                        match_url: this.match_url

                    })
                })
            },
            userList() {
                console.log('USER LSIT')
                this.user_list.forEach(element => {
                    console.log(element)
                })
            },

        },
    }
</script>

<style lang="css">
    #app {
        font-size: 24px;
    }

    .team_card {
        height: 300px;
        background-color: #c9ccc3;
        cursor: pointer;
        font-size: 36px;
        line-height: 8em;
    }

    .active_team_card {
        background-color: #338037;
    }

    .odds {
        background-color: #c9ccc3;
        font-size: 28px;
    }

    .max_bet {
        font-size: 24px;
    }
</style>
