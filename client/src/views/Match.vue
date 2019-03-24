<template lang="html">
    <v-content class="gradient">
        <div >
            <v-alert
                    :value="dota2_scoreboard.win_side"
                    dismissible
                    type="info"
            >
                {{dota2_scoreboard.win_side}} win this game! GG WP!!!
            </v-alert>

        </div>
        <v-container fluid style="background: linear-gradient(left, #F2C14E, #F78154);" class="text-md-center">
            <v-layout row wrap>
                <v-flex md4 sm4 >
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
                        <v-layout style="margin: -8px 8px !important;" row wrap>
                            <v-flex md12 ma-2 >
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
                                        <div style="color: #f9ff21" class="radiant_gold_lead">{{dota2_scoreboard.radiant.radiant_gold_lead}}
                                        </div>
                                    </v-flex>
                                    <v-flex md3>
                                        <div style="color: #f9ff21" class="dire_gold_lead">{{dota2_scoreboard.dire.dire_gold_lead}}</div>
                                    </v-flex>
                                    <v-flex md3>
                                        <div class="dire_score">{{dota2_scoreboard.dire.score}}</div>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
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
                                    <v-flex class="ma-3" md12 d-inline-flex>


                                        <v-flex>
                                            <v-text-field
                                                    style="font-size: 28px"
                                                    v-model="bet_value"
                                                    label="BET VALUE"
                                            ></v-text-field>
                                        </v-flex>
                                        <v-flex>
                                            <v-btn type="button" v-on:click="bet_value = (max_bet*0.2).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')" class="v-btn--small" fab>
                                                {{(max_bet*0.2).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')}}
                                            </v-btn>
                                        </v-flex>
                                        <v-flex>
                                            <v-btn type="button" v-on:click="bet_value = (max_bet*0.3).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')" class="v-btn--small" fab>
                                                {{(max_bet*0.3).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')}}
                                            </v-btn>
                                        </v-flex>
                                        <v-flex>
                                            <v-btn type="button" v-on:click="bet_value = (max_bet*0.4).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')" class="v-btn--small" fab>
                                                {{(max_bet*0.4).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')}}
                                            </v-btn>
                                        </v-flex>
                                        <v-flex>
                                            <v-btn type="button" v-on:click="bet_value = (max_bet*0.6).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')" class="v-btn--small" fab>
                                                {{(max_bet*0.6).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')}}
                                            </v-btn>
                                        </v-flex>
                                        <v-flex>
                                            <v-btn type="button" v-on:click="bet_value = (max_bet*0.8).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')" class="v-btn--small" fab>
                                                {{(max_bet*0.8).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')}}
                                            </v-btn>
                                        </v-flex>
                                        <v-flex>
                                            <v-btn dark type="button" style="font-size: 18px" v-on:click="setMaxBet" fab>{{max_bet}}</v-btn>
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
            <!--<v-flex>-->
                <!--<v-layout row wrap style="margin-top: 20px">-->
                    <!--<v-flex class="ma-2">-->
                        <!--<v-data-table-->
                                <!--:headers="headers"-->
                                <!--:items="desserts"-->
                                <!--class="elevation-1"-->
                        <!--&gt;-->
                            <!--<template v-slot:items="props">-->
                                <!--<td>{{ props.item.name }}</td>-->
                                <!--<td class="text-xs-right">{{ props.item.calories }}</td>-->
                                <!--<td class="text-xs-right">{{ props.item.calories }}</td>-->
                                <!--<td class="text-xs-right">{{ props.item.calories }}</td>-->
                                <!--<td class="text-xs-right">{{ props.item.fat }}</td>-->
                                <!--<td class="text-xs-right">{{ props.item.fat }}</td>-->
                                <!--<td class="text-xs-right">{{ props.item.fat }}</td>-->
                                <!--<td class="text-xs-right">{{ props.item.carbs }}</td>-->
                                <!--<td class="text-xs-right">{{ props.item.protein }}</td>-->
                                <!--<td class="text-xs-right">{{ props.item.iron }}</td>-->
                            <!--</template>-->
                        <!--</v-data-table>-->
                    <!--</v-flex>-->
                    <!--<v-flex class="ma-2">-->
                        <!--<v-data-table-->
                                <!--:headers="headers"-->
                                <!--:items="desserts"-->
                                <!--class="elevation-1"-->
                        <!--&gt;-->
                            <!--<template v-slot:items="props">-->
                                <!--<td>{{ props.item.name }}</td>-->
                                <!--<td class="text-xs-right">{{ props.item.calories }}</td>-->
                                <!--<td class="text-xs-right">{{ props.item.fat }}</td>-->
                                <!--<td class="text-xs-right">{{ props.item.carbs }}</td>-->
                                <!--<td class="text-xs-right">{{ props.item.protein }}</td>-->
                                <!--<td class="text-xs-right">{{ props.item.iron }}</td>-->
                            <!--</template>-->
                        <!--</v-data-table>-->
                    <!--</v-flex>-->
                <!--</v-layout>-->
            <!--</v-flex>-->
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
                user_list: [],
                headers: [
                    {
                        text: 'Radiant',
                        align: 'left',
                        sortable: false,
                        value: 'name'
                    },
                    { text: 'Calories', value: 'calories' },
                    { text: 'Fat (g)', value: 'fat' },
                    { text: 'Carbs (g)', value: 'carbs' },
                    { text: 'Protein (g)', value: 'protein' },
                    { text: 'Iron (%)', value: 'iron' }
                ],
                desserts: [
                    {
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        iron: '1%'
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        iron: '1%'
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                        iron: '7%'
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                        iron: '8%'
                    },
                    {
                        name: 'Gingerbread',
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9,
                        iron: '16%'
                    },
                    {
                        name: 'Jelly bean',
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0,
                        iron: '0%'
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                        iron: '2%'
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                        iron: '45%'
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                        iron: '22%'
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                        iron: '6%'
                    }
                ]
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
            for (let i= 0; i <20; i++) {
                this.user_list[i] = localStorage[i];
            }
            console.log(this.user_list)
            this.user_list.forEach(elem => {
                console.log(elem)
            })

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
                console.log(this.user_list)
            },
        },
        watch: {
            'dota2_scoreboard.win_side': function (data) {


                console.log(data)
                document.querySelector('#app > div.application--wrap > main').classList.remove('gradient')

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
        background-image: -webkit-gradient(linear, 0% 0%, 100% 100%,color-stop(0, rgb(202, 82, 82)),color-stop(1, rgb(231, 228, 94)));
        /* Android 2.3 */
        background-image: -webkit-repeating-linear-gradient(top left,rgb(202, 81, 82) -0.8%,rgb(231, 228, 94) 100%);
        /* IE10+ */
        background-image: repeating-linear-gradient(to bottom right,rgb(202, 81, 82) -0.8%,rgb(231, 228, 94) 100%);
        background-image: -ms-repeating-linear-gradient(top left,rgb(202, 81, 82) -0.8%,rgb(231, 228, 94) 100%);
    }

    /* IE8- CSS hack */
    @media \0screen\,screen\9 {
        .gradient {
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffca5152",endColorstr="#ffe7e45e",GradientType=0);
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
        background-image: -webkit-gradient(linear, 16.9% 108.1%, 83.1% -8.1%,color-stop(0, rgb(223, 200, 186)),color-stop(1, rgb(3, 96, 120)));
        /* Android 2.3 */
        background-image: -webkit-repeating-linear-gradient(63deg,rgb(225, 201, 187) -0.8%,rgb(3, 96, 120) 100%);
        /* IE10+ */
        background-image: repeating-linear-gradient(27deg,rgb(225, 201, 187) -0.8%,rgb(3, 96, 120) 100%);
        background-image: -ms-repeating-linear-gradient(63deg,rgb(225, 201, 187) -0.8%,rgb(3, 96, 120) 100%);
    }

    /* IE8- CSS hack */
    @media \0screen\,screen\9 {
        .gradient {
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff036078",endColorstr="#ffe1c9bb",GradientType=0);
        }
    }





</style>
