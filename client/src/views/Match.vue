<template lang="html">
    <v-content>
        <v-container fluid style="background-color: whitesmoke;" class="text-md-center bet-block">
            <v-layout row wrap>
                <v-flex md4 sm4 style="margin-top: 17px">
                    <v-layout v-if="!reverseTeams" v-on:click="chooseWinner(1)"
                              class="team_card radiant" v-bind:class="{active_team_card: winner === 1}">
                        <v-flex md8>
                            <div>{{team_1_name}}</div>
                        </v-flex>
                        <v-flex md4>
                            <img height="200" style="display: block; margin: 40px 100px 300px -30px"
                                 v-bind:src="team_1_img"/>
                        </v-flex>
                    </v-layout>
                    <v-layout v-else-if="reverseTeams === true" v-on:click="chooseWinner(2)"
                              v-bind:class="{active_team_card: winner === 2}"
                              class="team_card dire">

                        <v-flex md8>
                            <div>{{team_2_name}}</div>
                        </v-flex>
                        <v-flex md4>
                            <img height="200" style="display: block; margin: 40px 100px 300px -30px"
                                 v-bind:src="team_2_img"/>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex md12 ma-3 class="text-md-center">
                            <v-btn type="button" v-on:click="urlHandler" fab class="v-btn--large">URL</v-btn>
                            <v-btn v-on:click="userList()" class="ma-4">User-list</v-btn>
                            <span class="mx-3">|</span>
                            <v-label>{{reverseTeams}}
                                <v-btn v-on:click="reverseTeams = !reverseTeams" type="button">Reverse</v-btn>
                            </v-label>
                        </v-flex>
                    </v-layout>
                </v-flex>

                <v-flex md4 sm4>
                    <div>
                        <v-layout ma-2 row wrap>
                            <v-flex md12 ma-2>
                                <v-layout>
                                    <v-flex md6 class="text-md-center radiant-map">
                                        <ul class="tower" type="none">
                                            <li>{{dota2_scoreboard.radiant.towers.top.t1}}</li>
                                            <li>{{dota2_scoreboard.radiant.towers.middle.t1}}</li>
                                            <li>{{dota2_scoreboard.radiant.towers.bottom.t1}}</li>
                                        </ul>
                                        <ul class="tower" type="none">
                                            <li>{{dota2_scoreboard.radiant.towers.top.t2}}</li>
                                            <li>{{dota2_scoreboard.radiant.towers.middle.t2}}</li>
                                            <li>{{dota2_scoreboard.radiant.towers.bottom.t2}}</li>
                                        </ul>
                                        <ul class="tower" type="none">
                                            <li>{{dota2_scoreboard.radiant.towers.top.t3}}</li>
                                            <li>{{dota2_scoreboard.radiant.towers.middle.t3}}</li>
                                            <li>{{dota2_scoreboard.radiant.towers.bottom.t3}}</li>
                                        </ul>
                                        <ul class="tower" type="none">
                                            <li>{{dota2_scoreboard.radiant.towers.top.t4}}</li>
                                            <li>&ensp;</li>
                                            <li>{{dota2_scoreboard.radiant.towers.bottom.t4}}</li>
                                        </ul>
                                        <ul class="barrack" type="none">
                                            <li>{{dota2_scoreboard.radiant.barracks.top.range}}</li>
                                            <li>{{dota2_scoreboard.radiant.barracks.top.mili}}</li>
                                            <li>{{dota2_scoreboard.radiant.barracks.middle.range}}</li>
                                            <li>{{dota2_scoreboard.radiant.barracks.middle.mili}}</li>
                                            <li>{{dota2_scoreboard.radiant.barracks.bottom.range}}</li>
                                            <li>{{dota2_scoreboard.radiant.barracks.bottom.mili}}</li>
                                        </ul>
                                    </v-flex>
                                    <v-flex md6 class="text-md-center dire-map">
                                        <ul class="tower2" type="none">
                                            <li>{{dota2_scoreboard.dire.towers.top.t1}}</li>
                                            <li>{{dota2_scoreboard.dire.towers.middle.t1}}</li>
                                            <li>{{dota2_scoreboard.dire.towers.bottom.t1}}</li>
                                        </ul>
                                        <ul class="tower2" type="none">
                                            <li>{{dota2_scoreboard.dire.towers.top.t2}}</li>
                                            <li>{{dota2_scoreboard.dire.towers.middle.t2}}</li>
                                            <li>{{dota2_scoreboard.dire.towers.bottom.t2}}</li>
                                        </ul>
                                        <ul class="tower2" type="none">
                                            <li>{{dota2_scoreboard.dire.towers.top.t3}}</li>
                                            <li>{{dota2_scoreboard.dire.towers.middle.t3}}</li>
                                            <li>{{dota2_scoreboard.dire.towers.bottom.t3}}</li>
                                        </ul>
                                        <ul class="tower2" type="none">
                                            <li>{{dota2_scoreboard.radiant.towers.top.t4}}</li>
                                            <li>&ensp;</li>
                                            <li>{{dota2_scoreboard.radiant.towers.bottom.t4}}</li>
                                        </ul>
                                        <ul class="barrack" type="none">
                                            <li>{{dota2_scoreboard.dire.barracks.top.range}}</li>
                                            <li>{{dota2_scoreboard.dire.barracks.top.mili}}</li>
                                            <li>{{dota2_scoreboard.dire.barracks.middle.range}}</li>
                                            <li>{{dota2_scoreboard.dire.barracks.middle.mili}}</li>
                                            <li>{{dota2_scoreboard.dire.barracks.bottom.range}}</li>
                                            <li>{{dota2_scoreboard.dire.barracks.bottom.mili}}</li>
                                        </ul>
                                    </v-flex>

                                </v-layout>
                            </v-flex>

                            <v-flex md12>
                                <v-layout>
                                    <v-flex md4 pa-2>
                                        <div class="match_result radiant_score">{{dota2_scoreboard.radiant.team_name}}
                                        </div>
                                    </v-flex>
                                    <v-flex md4 pa-2>
                                        <div class="match_result time">{{dota2_scoreboard.game_time}}</div>
                                    </v-flex>
                                    <v-flex md4 pa-2>
                                        <div class="match_result dire_score">{{dota2_scoreboard.dire.team_name}}</div>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex md12>
                                <v-layout pa-2>
                                    <v-flex md3>
                                        <div class="radiant_score">{{dota2_scoreboard.radiant.score}}</div>
                                    </v-flex>
                                    <v-flex md3>
                                        <div class="radiant_gold_lead">{{dota2_scoreboard.radiant.radiant_gold_lead}}
                                        </div>
                                    </v-flex>
                                    <v-flex md3>
                                        <div class="dire_gold_lead">{{dota2_scoreboard.dire.dire_gold_lead}}</div>
                                    </v-flex>
                                    <v-flex md3>
                                        <div class="dire_score">{{dota2_scoreboard.dire.score}}</div>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex md6 pa-2>
                                <div class="odds">{{team_1_odds}}</div>
                            </v-flex>
                            <v-flex md6 pa-2>
                                <div class="odds">{{team_2_odds}}</div>
                            </v-flex>
                            <v-flex md12>
                                <v-form
                                        @submit="placeBet"
                                        row wrap
                                >
                                    <v-flex class="ma-3" md12 d-inline-flex>


                                        <v-flex>
                                            <v-text-field
                                                    style="font-size: 28px"
                                                    v-model="bet_value"
                                                    label="BET VALUE"
                                            ></v-text-field>
                                        </v-flex>
                                        <v-flex>
                                            <v-btn type="button" v-on:click="bet_value = 0.4" class="v-btn--small" fab>
                                                0.4
                                            </v-btn>
                                        </v-flex>
                                        <v-flex>
                                            <v-btn type="button" v-on:click="bet_value = 0.6" class="v-btn--small" fab>
                                                0.6
                                            </v-btn>
                                        </v-flex>
                                        <v-flex>
                                            <v-btn type="button" v-on:click="bet_value = 0.8" class="v-btn--small" fab>
                                                0.8
                                            </v-btn>
                                        </v-flex>
                                        <v-flex>
                                            <v-btn type="button" v-on:click="bet_value = 1" class="v-btn--small" fab>1
                                            </v-btn>
                                        </v-flex>
                                        <v-flex>
                                            <v-btn type="button" v-on:click="setMaxBet" fab>{{max_bet}}</v-btn>
                                        </v-flex>

                                    </v-flex>
                                    <v-flex>
                                        <v-layout>
                                            <v-flex v-if="!place_bet_pressed" md12>
                                                <v-btn type="submit"
                                                       style="height: 60px; font-size: 26px"
                                                       class="v-btn--large bet-button" block dark>PLACE BET
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
                </v-flex>
                <v-flex md4 sm4 style="margin-top: 17px">
                    <v-layout v-if="!reverseTeams" v-on:click="chooseWinner(2)"
                              v-bind:class="{active_team_card: winner === 2}"
                              class="team_card dire">
                        <v-flex md4>
                            <img height="200" style="display: block; margin: 40px 100px 300px 0"
                                 v-bind:src="team_2_img"/>
                        </v-flex>
                        <v-flex md8>
                            <div>{{team_2_name}}</div>
                        </v-flex>
                    </v-layout>
                    <v-layout v-else-if="reverseTeams === true" v-on:click="chooseWinner(1)"
                              class="team_card radiant" v-bind:class="{active_team_card: winner === 1}">

                        <v-flex md4>
                            <img height="200" style="display: block; margin: 40px 100px 300px 0"
                                 v-bind:src="team_1_img"/>
                        </v-flex>
                        <v-flex md8>
                            <div>{{team_1_name}}</div>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex md12 ma-3 class="text-md-center">

                            <v-form
                                    @submit="openZPlaySocket">

                                <v-text-field v-model="match_id" label="ZPLAY MAIN" class="ma-2"></v-text-field>
                                <v-label> &#8194; &#8194;Main
                                    <v-btn type="submit">Start</v-btn>
                                </v-label>
                                <v-btn v-on:click="closeZPlaySocket" type="button">Stop</v-btn>

                            </v-form>
                            <v-form
                                    @submit="openZPlaySocketReverse">
                                <v-label>Reserve
                                    <v-btn type="submit">Start</v-btn>
                                </v-label>
                                <v-btn v-on:click="closeZPlaySocketReserve" type="button">Stop</v-btn>

                            </v-form>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    import {zplaySocket} from "../common/websockets";
    import {zplaySocketReserve} from '../common/websockets'


    export default {
        name: 'Match',
        data() {
            return {
                reverseTeams: false,
                match_id: '',
                dota2_scoreboard: {
                    game_time: 0,
                    win_side: null,
                    finished: null,
                    radiant: {
                        team_name: 'Radiant',
                        barracks: {
                            top: {
                                range: 1,
                                mili: 1
                            },
                            middle: {
                                range: 1,
                                mili: 1
                            },
                            bottom: {
                                range: 1,
                                mili: 1
                            },
                        },
                        towers: {
                            top: {
                                t1: 1,
                                t2: 1,
                                t3: 1,
                                t4: 1
                            },
                            middle: {
                                t1: 1,
                                t2: 1,
                                t3: 1,

                            },
                            bottom: {
                                t1: 1,
                                t2: 1,
                                t3: 1,
                                t4: 1
                            },
                        },
                        score: '?',
                        radiant_gold_lead: '?'
                    },
                    dire: {
                        team_name: 'Dire',
                        barracks: {
                            top: {
                                range: 1,
                                mili: 1
                            },
                            middle: {
                                range: 1,
                                mili: 1
                            },
                            bottom: {
                                range: 1,
                                mili: 1
                            },
                        },
                        towers: {
                            top: {
                                t1: 1,
                                t2: 1,
                                t3: 1,
                                t4: 1
                            },
                            middle: {
                                t1: 1,
                                t2: 1,
                                t3: 1,
                                t4: 1
                            },
                            bottom: {
                                t1: 1,
                                t2: 1,
                                t3: 1,
                                t4: 1
                            },
                        },
                        score: '?',
                        dire_gold_lead: '?'
                    },
                },
                match_url: '',
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
                place_bet_pressed: false,
                seconds: 0,
                intervals: [],
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

        mounted() {


            if (this.dota2_scoreboard.radiant.radiant_gold_lead < 0) {
                this.dota2_scoreboard.radiant.radiant_gold_lead = '--'
            }
            if (this.dota2_scoreboard.dire.dire_gold_lead < 0) {
                this.dota2_scoreboard.radiant.radiant_gold_lead = '--'
            }

            const zplayData = data => {
                console.log(data)
                if (data.win_side) this.dota2_scoreboard.win_side = data.win_side;
                this.dota2_scoreboard.finished = data.finished;
                this.dota2_scoreboard.radiant.score = data.radiant.score
                if (data.radiant_gold_lead) this.dota2_scoreboard.radiant.radiant_gold_lead = data.radiant_gold_lead;
                this.dota2_scoreboard.dire.score = data.dire.score;
                this.dota2_scoreboard.radiant.team_name = data.radiant_team.name;
                this.dota2_scoreboard.dire.team_name = data.dire_team.name;
                if (data.radiant_gold_lead > 0) {
                    this.dota2_scoreboard.radiant.radiant_gold_lead = data.radiant_gold_lead;
                    this.dota2_scoreboard.dire.dire_gold_lead = data.radiant_gold_lead * (-1);
                } else {
                    this.dota2_scoreboard.dire.dire_gold_lead = data.radiant_gold_lead * (-1);
                    this.dota2_scoreboard.radiant.radiant_gold_lead = data.radiant_gold_lead;
                }

                if (data.game_time) {
                    let date = new Date(null);
                    date.setSeconds(data.game_time);
                    this.dota2_scoreboard.game_time = date.toISOString().substr(11, 8);
                }


                if (data.radiant.towers[0] === 1) {
                    this.dota2_scoreboard.radiant.towers.bottom.t4 = '||'
                } else {
                    this.dota2_scoreboard.radiant.towers.bottom.t4 = '_'
                }

                if (data.radiant.towers[1] === 1) {
                    this.dota2_scoreboard.radiant.towers.top.t4 = '||'
                } else {
                    this.dota2_scoreboard.radiant.towers.top.t4 = '_'
                }

                if (data.radiant.towers[2] === 1) {
                    this.dota2_scoreboard.radiant.towers.bottom.t3 = '||'
                } else {
                    this.dota2_scoreboard.radiant.towers.bottom.t3 = '_'
                }

                if (data.radiant.towers[3] === 1) {
                    this.dota2_scoreboard.radiant.towers.bottom.t2 = '||'
                } else {
                    this.dota2_scoreboard.radiant.towers.bottom.t2 = '_'
                }

                if (data.radiant.towers[4] === 1) {
                    this.dota2_scoreboard.radiant.towers.bottom.t1 = '||'
                } else {
                    this.dota2_scoreboard.radiant.towers.bottom.t1 = '_'
                }

                if (data.radiant.towers[5] === 1) {
                    this.dota2_scoreboard.radiant.towers.middle.t3 = '||'
                } else {
                    this.dota2_scoreboard.radiant.towers.middle.t3 = '_'
                }

                if (data.radiant.towers[6] === 1) {
                    this.dota2_scoreboard.radiant.towers.middle.t2 = '||'
                } else {
                    this.dota2_scoreboard.radiant.towers.middle.t2 = '_'
                }

                if (data.radiant.towers[7] === 1) {
                    this.dota2_scoreboard.radiant.towers.middle.t1 = '||'
                } else {
                    this.dota2_scoreboard.radiant.towers.middle.t1 = '_'
                }

                if (data.radiant.towers[8] === 1) {
                    this.dota2_scoreboard.radiant.towers.top.t3 = '||'
                } else {
                    this.dota2_scoreboard.radiant.towers.top.t3 = '_'
                }

                if (data.radiant.towers[9] === 1) {
                    this.dota2_scoreboard.radiant.towers.top.t2 = '||'
                } else {
                    this.dota2_scoreboard.radiant.towers.top.t2 = '_'
                }

                if (data.radiant.towers[10] === 1) {
                    this.dota2_scoreboard.radiant.towers.top.t1 = '||'
                } else {
                    this.dota2_scoreboard.radiant.towers.top.t1 = '_'
                }

                if (data.radiant.barracks[0] === 1) {
                    this.dota2_scoreboard.radiant.barracks.bottom.mili = '/\\'
                } else {
                    this.dota2_scoreboard.radiant.barracks.bottom.mili = '_'
                }

                if (data.radiant.barracks[1] === 1) {
                    this.dota2_scoreboard.radiant.barracks.bottom.range = '/\\'
                } else {
                    this.dota2_scoreboard.radiant.barracks.bottom.range = '_'
                }

                if (data.radiant.barracks[2] === 1) {
                    this.dota2_scoreboard.radiant.barracks.middle.mili = '/\\'
                } else {
                    this.dota2_scoreboard.radiant.barracks.middle.mili = '_'
                }

                if (data.radiant.barracks[3] === 1) {
                    this.dota2_scoreboard.radiant.barracks.middle.range = '/\\'
                } else {
                    this.dota2_scoreboard.radiant.barracks.middle.range = '_'
                }

                if (data.radiant.barracks[4] === 1) {
                    this.dota2_scoreboard.radiant.barracks.top.mili = '/\\'
                } else {
                    this.dota2_scoreboard.radiant.barracks.top.mili = '_'
                }

                if (data.radiant.barracks[5] === 1) {
                    this.dota2_scoreboard.radiant.barracks.top.range = '/\\'
                } else {
                    this.dota2_scoreboard.radiant.barracks.top.range = '_'
                }

                //
                //
                //


                if (data.dire.towers[0] === 1) {
                    this.dota2_scoreboard.dire.towers.bottom.t4 = '||'
                } else {
                    this.dota2_scoreboard.dire.towers.bottom.t4 = '_'
                }

                if (data.dire.towers[1] === 1) {
                    this.dota2_scoreboard.dire.towers.top.t4 = '||'
                } else {
                    this.dota2_scoreboard.dire.towers.top.t4 = '_'
                }

                if (data.dire.towers[2] === 1) {
                    this.dota2_scoreboard.dire.towers.bottom.t3 = '||'
                } else {
                    this.dota2_scoreboard.dire.towers.bottom.t3 = '_'
                }

                if (data.dire.towers[3] === 1) {
                    this.dota2_scoreboard.dire.towers.bottom.t2 = '||'
                } else {
                    this.dota2_scoreboard.dire.towers.bottom.t2 = '_'
                }

                if (data.dire.towers[4] === 1) {
                    this.dota2_scoreboard.dire.towers.bottom.t1 = '||'
                } else {
                    this.dota2_scoreboard.dire.towers.bottom.t1 = '_'
                }

                if (data.dire.towers[5] === 1) {
                    this.dota2_scoreboard.dire.towers.middle.t3 = '||'
                } else {
                    this.dota2_scoreboard.dire.towers.middle.t3 = '_'
                }

                if (data.dire.towers[6] === 1) {
                    this.dota2_scoreboard.dire.towers.middle.t2 = '||'
                } else {
                    this.dota2_scoreboard.dire.towers.middle.t2 = '_'
                }

                if (data.dire.towers[7] === 1) {
                    this.dota2_scoreboard.dire.towers.middle.t1 = '||'
                } else {
                    this.dota2_scoreboard.dire.towers.middle.t1 = '_'
                }

                if (data.dire.towers[8] === 1) {
                    this.dota2_scoreboard.dire.towers.top.t3 = '||'
                } else {
                    this.dota2_scoreboard.dire.towers.top.t3 = '_'
                }

                if (data.dire.towers[9] === 1) {
                    this.dota2_scoreboard.dire.towers.top.t2 = '||'
                } else {
                    this.dota2_scoreboard.dire.towers.top.t2 = '_'
                }

                if (data.dire.towers[10] === 1) {
                    this.dota2_scoreboard.dire.towers.top.t1 = '||'
                } else {
                    this.dota2_scoreboard.dire.towers.top.t1 = '_'
                }

                if (data.dire.barracks[0] === 1) {
                    this.dota2_scoreboard.dire.barracks.bottom.mili = '/\\'
                } else {
                    this.dota2_scoreboard.dire.barracks.bottom.mili = '_'
                }

                if (data.dire.barracks[1] === 1) {
                    this.dota2_scoreboard.dire.barracks.bottom.range = '/\\'
                } else {
                    this.dota2_scoreboard.dire.barracks.bottom.range = '_'
                }

                if (data.dire.barracks[2] === 1) {
                    this.dota2_scoreboard.dire.barracks.middle.mili = '/\\'
                } else {
                    this.dota2_scoreboard.dire.barracks.middle.mili = '_'
                }

                if (data.dire.barracks[3] === 1) {
                    this.dota2_scoreboard.dire.barracks.middle.range = '/\\'
                } else {
                    this.dota2_scoreboard.dire.barracks.middle.range = '_'
                }

                if (data.dire.barracks[4] === 1) {
                    this.dota2_scoreboard.dire.barracks.top.mili = '/\\'
                } else {
                    this.dota2_scoreboard.dire.barracks.top.mili = '_'
                }

                if (data.dire.barracks[5] === 1) {
                    this.dota2_scoreboard.dire.barracks.top.range = '/\\'
                } else {
                    this.dota2_scoreboard.dire.barracks.top.range = '_'
                }
            }

            zplaySocket.on('dota2_scoreboard', zplayData)
            zplaySocketReserve.on('dota2_scoreboard', zplayData)

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
            bet_msg_from_player: function (data) {
                if (data.timer === true && this.timer === false) this.timer = true
            },

            user_list: function (data) {
                this.user_list = data.user_list
                // let count = 0
                // for (let prop in data) {
                //     if (data[prop].permission === "player") {
                //         this.user_list[count] = data[prop].steam_username;
                //         count++;
                //     }
                // }
            }
        },


        methods: {
            openZPlaySocket(e) {
                e.preventDefault();
                zplaySocket.open();
                zplaySocket.emit('dota2_match', this.match_id);
            },
            openZPlaySocketReverse(e) {
                e.preventDefault();
                e.preventDefault();
                zplaySocketReserve.open();
                zplaySocketReserve.emit('dota2_match', this.match_id);
            },

            closeZPlaySocket(e) {
                e.preventDefault();
                zplaySocket.close();
                console.log('CLOSED')
            },
            closeZPlaySocketReserve(e) {
                e.preventDefault();
                zplaySocketReserve.close();
                console.log('CLOSED')
            },

            chooseWinner(t_winner) {
                this.winner = t_winner;
            },

            placeBet(e) {
                e.preventDefault();
                if (this.winner && this.bet_value) {
                    console.log('placeBet pressed')
                    this.place_bet_pressed = true;
                    this.seconds = 61;
                    this.timerOn();

                    this.user_list.forEach(element => {
                        this.$socket.emit('bet_msg_to_player', {
                            steam_username: element,
                            team_winner: this.winner,
                            bet_val: this.bet_value
                        })
                    });

                } else alert('НЕ ВЫБРАНА КОМАНДА ИЛИ НЕ ВВЕДЕНА СУММА СТАВКИ');
            },
            timerOn() {

                console.log('TIMER')

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
                console.log(user_list)
            },
        },
        watch: {
            'dota2_scoreboard.win_side': function (data) {


                console.log(data)
                document.querySelector(`.${data}`).setAttribute('style', 'background-color: #208ee6');
                document.querySelector('.bet-block').setAttribute('style', 'background-color: #cc9e38');

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
    }
</script>

<style lang="css">
    #app {
        font-size: 20px;
    }

    .team_card {
        box-shadow: 0 3px 10px #4e5869;
        height: 300px;
        border-radius: 5px;
        background-color: #c9ccc3;
        cursor: pointer;
        font-size: 36px;
        line-height: 8em;
    }


    .active_team_card {
        background-color: #ffcb00;
    }


    .bet-button {
        height: 120px;
        font-size: 26px
    }

    .odds {
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
</style>
