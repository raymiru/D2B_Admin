<template lang="html">
    <v-app style="background-color: #00bcd4">
        <v-container style="background-color: whitesmoke;" class="text-md-center">
            <v-layout row wrap>
                <v-flex md4 sm12 class="pa-5">
                    <v-layout v-on:click="chooseWinner(1)" v-bind:class="{active_team_card: winner === 1}"
                              class="team_card pa-5" row wrap>
                        <v-flex md12>
                            <div style="">{{team_1_name}}</div>
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
                                <div class="odds">{{koef_t1}}</div>
                            </v-flex>
                            <v-flex md6 pa-3>
                                <div class="odds">{{koef_t2}}</div>
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
                                        <v-btn type="submit" class="v-btn--large" dark>PLACE BET</v-btn>
                                    </v-flex>
                                    <v-flex>

                                    </v-flex>


                                </v-form>
                            </v-flex>
                        </v-layout>
                    </div>
                </v-flex>
                <v-flex md4 sm12 class="pa-5">
                    <v-layout v-on:click="chooseWinner(2)" v-bind:class="{active_team_card: winner === 2}"
                              class="team_card pa-5" row wrap>
                        <v-flex md12>
                            <div>{{team_2_name}}</div>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container style="background-color: #9ccc65; height: 100%">
            <v-layout>
                <v-flex md9>
                    <div class="ma-4">Match URL: {{match_url}}<v-btn type="button" v-on:click="urlHandler" fab >URL</v-btn></div>
                </v-flex>
                <v-flex md6>
                    <v-btn v-on:click="userList()" class="ma-4">User-list</v-btn>
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
                koef_t1: 0,
                koef_t2: 0,
                t_name: 'Championship name',
                map_num_info: 'map_num_info',
                bo: 'bo_info',
                max_bet: 0,
                winner: 0,
                bet_value: undefined,
                user_list: []
            }
        },
        created() {
            this.$socket.emit('register', {
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
                if (data.koef_t1) this.koef_t1 = data.koef_t1;
                if (data.koef_t2) this.koef_t2 = data.koef_t2;
                if (data.t_name) this.t_name = data.t_name;
                if (data.bo) this.bo = data.bo;
                if (data.map_num_info) this.map_num_info = data.map_num_info;
                if (data.max_bet) this.max_bet = data.max_bet;
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
                })

            },
            setMaxBet() {
                console.log('MAX BET')
                this.bet_value = this.max_bet
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
            }
        },
    }
</script>

<style lang="css">
    #app {
        font-size: 24px;
    }

    .team_card {
        background-color: #c9ccc3;
        cursor: pointer;
        font-size: 32px;
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
