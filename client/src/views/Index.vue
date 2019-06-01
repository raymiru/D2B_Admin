<template>
    <v-content>
        <v-container fluid>
            <v-layout justify-space-around row fill-height text-xs-center>

                <v-card class="item">
                    <v-card-text>Match 1</v-card-text>
                    <v-layout row>
                        <v-card-text class="">
                            <v-text-field
                                    style="font-size: 28px"
                                    v-model="matches.match1.team_1_name"
                                    label="Team 1 name"
                            ></v-text-field>
                        </v-card-text>
                        <v-card-text class="">
                            <v-text-field
                                    style="font-size: 28px"
                                    v-model="matches.match1.team_2_name"
                                    label="Team 2 name"
                            ></v-text-field>
                        </v-card-text>
                    </v-layout>
                </v-card>
                <v-card class="item">
                    <v-card-text>Match 2</v-card-text>
                    <v-layout row>
                        <v-card-text class="">
                            <v-text-field
                                    style="font-size: 28px"
                                    v-model="matches.match2.team_1_name"
                                    label="Team 1 name"
                            ></v-text-field>
                        </v-card-text>
                        <v-card-text class="">
                            <v-text-field
                                    style="font-size: 28px"
                                    v-model="matches.match2.team_2_name"
                                    label="Team 2 name"
                            ></v-text-field>
                        </v-card-text>
                    </v-layout>
                </v-card>
                <v-card class="item">
                    <v-card-text>Match 3</v-card-text>
                    <v-layout row>
                        <v-card-text class="">
                            <v-text-field
                                    style="font-size: 28px"
                                    v-model="matches.match3.team_1_name"
                                    label="Team 1 name"
                            ></v-text-field>
                        </v-card-text>
                        <v-card-text class="">
                            <v-text-field
                                    style="font-size: 28px"
                                    v-model="matches.match3.team_2_name"
                                    label="Team 2 name"
                            ></v-text-field>
                        </v-card-text>
                    </v-layout>
                </v-card>
            </v-layout>

            <v-layout justify-space-around fill-height text-xs-center>
                <v-btn v-on:click="sendTeamNames" class="item">Save</v-btn>
                <v-btn v-on:click="sendTeamNames" class="item">Save</v-btn>
                <v-btn v-on:click="sendTeamNames" class="item">Save</v-btn>
            </v-layout>

            <v-layout justify-center row>
                <v-btn v-on:click="clearHeaderMatchesLS" class="item">Clear LS Header Team Names</v-btn>
            </v-layout>
            <div class="text-xs-center" style="margin-top: 30px">
                Players
            </div>
            <v-layout justify-space-around style="margin-bottom: 15px" row fill-height text-xs-center>
                <v-card class="item">
                    <v-layout justify-center row>
                        <v-btn v-on:click="allPlayersFree" class="ma-4">
                            ALL FREE
                        </v-btn>
                    </v-layout>
                </v-card>
                <v-card class="item">
                    <v-card-text>All Players</v-card-text>
                    <v-layout row>
                        <v-card-text class="">
                            All Players: {{players.all_players.players_count}}
                        </v-card-text>
                        <v-card-text class="">
                            Free Players: {{free}}
                        </v-card-text>
                    </v-layout>
                </v-card>
                <v-card class="item">
                    <v-card-text>All Watchers</v-card-text>
                    <v-layout row>
                        <v-card-text class="">
                            All Watchers: {{watchers.all_watchers.watchers_count}}
                        </v-card-text>
                        <v-card-text class="">
                            Free Watchers: {{w_free}}
                        </v-card-text>
                    </v-layout>
                </v-card>
            </v-layout>

            <v-layout justify-space-around row fill-height text-xs-center>

                <v-card class="item">
                    <v-card-text>Match 1</v-card-text>
                    <v-layout row>
                        <v-card-text class="match_count_card">
                            Players: {{players.matches_players.match1.players_count}}
                        </v-card-text>
                        <v-card-text class="">
                            <v-text-field
                                    style="font-size: 28px"
                                    v-model="players.matches_players.match1.players_need_count"
                                    label="Need count players?"
                            ></v-text-field>
                        </v-card-text>
                        <v-card-text class="match_count_card">
                            WR ID: {{watchers.matches_watchers.match1.watcher_id}}
                        </v-card-text>
                    </v-layout>
                </v-card>
                <v-card class="item">
                    <v-card-text>Match 2</v-card-text>
                    <v-layout row>
                        <v-card-text class="match_count_card">
                            Players: {{players.matches_players.match2.players_count}}
                        </v-card-text>
                        <v-card-text class="">
                            <v-text-field
                                    style="font-size: 28px"
                                    v-model="players.matches_players.match2.players_need_count"
                                    label="Need count players?"
                            ></v-text-field>
                        </v-card-text>
                        <v-card-text class="match_count_card">
                            WR ID: {{watchers.matches_watchers.match2.watcher_id}}
                        </v-card-text>
                    </v-layout>
                </v-card>
                <v-card class="item">
                    <v-card-text>Match 3</v-card-text>
                    <v-layout row>
                        <v-card-text class="match_count_card">
                            Players: {{players.matches_players.match3.players_count}}
                        </v-card-text>
                        <v-card-text class="">
                            <v-text-field
                                    style="font-size: 28px"
                                    v-model="players.matches_players.match3.players_need_count"
                                    label="Need count players?"
                            ></v-text-field>
                        </v-card-text>
                        <v-card-text class="match_count_card">
                            WR ID: {{watchers.matches_watchers.match3.watcher_id}}
                        </v-card-text>
                    </v-layout>
                </v-card>
            </v-layout>

            <v-layout justify-space-around row text-xs-center>

                <v-flex xs4>
                    <v-btn v-bind:class="{'disable-events': players.matches_players.match1.enter_button_pressed}"
                           v-on:click="goRandomPlayers('match1', players.matches_players.match1.players_need_count)"
                           class="item">M1 ENTER
                    </v-btn>
                    <v-btn class="item" v-on:click="outMatchPlayers('match1')"
                           v-bind:class="{'disable-events': players.matches_players.match1.out_button_pressed}">
                        M1 OUT
                    </v-btn>
                </v-flex>
                <v-flex xs4>
                    <v-btn v-bind:class="{'disable-events': players.matches_players.match2.enter_button_pressed}"
                           v-on:click="goRandomPlayers('match2', players.matches_players.match2.players_need_count)"
                           class="item">M2 ENTER
                    </v-btn>
                    <v-btn class="item" v-on:click="outMatchPlayers('match2')"
                           v-bind:class="{'disable-events': players.matches_players.match2.out_button_pressed}">
                        M2 OUT
                    </v-btn>
                </v-flex>
                <v-flex xs4>
                    <v-btn v-bind:class="{'disable-events': players.matches_players.match3.enter_button_pressed}"
                           v-on:click="goRandomPlayers('match3', players.matches_players.match3.players_need_count)"
                           class="item">M3 ENTER
                    </v-btn>
                    <v-btn class="item" v-on:click="outMatchPlayers('match3')"
                           v-bind:class="{'disable-events': players.matches_players.match3.out_button_pressed}">
                        M3 OUT
                    </v-btn>
                </v-flex>

            </v-layout>
        </v-container>

    </v-content>
</template>

<script>
    import {bus} from "../services/bus";
    import {randomFromPlayersArray} from "../services/ProfitService/randomFromArray";

    // const Dota2Api = require('dota2-api');
    //
    // const da = Dota2Api.create('4DA49E795D91371C6C5226728380F221', 570)
    //
    //
    // const options = {partner: 3};
    //
    // const ALL = () => {
    //     da.getTopLiveGame(options).then((result) => {
    //         result.game_list.forEach(elem => {
    //             console.log(elem.team_name_radiant)
    //             console.log(elem.team_name_dire)
    //             console.log(elem.match_id)
    //         })
    //     }, (errorResponseStatusText) => {
    //         console.log(errorResponseStatusText);
    //     });
    // }
    //
    //
    // const watchGame = match_id => {
    //     da.getTopLiveGame(options).then((result) => {
    //         result.game_list.forEach(elem => {
    //             if (elem.match_id === match_id) {
    //                 console.log(elem.team_name_radiant)
    //                 console.log(elem.team_name_dire)
    //                 console.log(elem.match_id)
    //             }
    //         })
    //     }, (errorResponseStatusText) => {
    //         console.log(errorResponseStatusText);
    //     });
    // }
    //
    // watchGame(4789174024);
    //
    // const TSG = () => {
    //     da.getTopLiveGame(options).then((result) => {
    //         console.log(result.game_list[0].team_name_radiant);
    //         console.log(result.game_list[0].radiant_score);
    //         console.log(result.game_list[0].team_name_dire);
    //         console.log(result.game_list[0].dire_score);
    //         console.log(result.game_list[0].building_state);
    //     }, (errorResponseStatusText) => {
    //         console.log(errorResponseStatusText);
    //     });
    // }


    console.log('INDEX PAGE')

    export default {
        name: "Index",
        data() {
            return {

                matches: null,

                watchers: {
                    w_free: 0,
                    all_watchers: {
                        watchers: null,
                        watchers_ids: [],
                        watchers_count: 0,
                    },

                    free_watchers: {
                        watchers: null,
                        watchers_ids: [],
                        watchers_count: 0
                    },

                    matches_watchers: {
                        match1: {
                            watcher: null,
                            watcher_id: null,
                            watchers_count: 0
                        },

                        match2: {
                            watcher: null,
                            watcher_id: null,
                            watchers_count: 0
                        },

                        match3: {
                            watcher: null,
                            watcher_id: null,
                            watchers_count: 0
                        }
                    }

                },

                players: {
                    free: 0,
                    all_players: {
                        players: null,
                        players_ids: [],
                        players_count: 0,
                    },

                    free_players: {
                        players: null,
                        players_ids: [],
                        players_count: 0,
                    },

                    matches_players: {
                        match1: {
                            players: null,
                            players_ids: [],
                            players_count: 0,
                            players_need_count: null,
                            enter_button_pressed: false,
                            out_button_pressed: true
                        },

                        match2: {
                            players: null,
                            players_ids: [],
                            players_count: 0,
                            players_need_count: null,
                            enter_button_pressed: false,
                            out_button_pressed: true
                        },

                        match3: {
                            players: null,
                            players_ids: [],
                            players_count: 0,
                            players_need_count: null,
                            enter_button_pressed: false,
                            out_button_pressed: true,
                        }
                    },
                }

            }
        },

        methods: {
            sendTeamNames() {
                localStorage['header-matches'] = JSON.stringify(this.matches)
                bus.$emit('header-matches-event')
            },

            fillMatchPlayers() {
                bus.$emit('match1')
                console.log('fill match players')
            },

            clearHeaderMatchesLS() {
                this.matches = {
                    match1: {
                        team_1_name: '',
                        team_2_name: ''
                    },

                    match2: {
                        team_1_name: '',
                        team_2_name: ''
                    },

                    match3: {
                        team_1_name: '',
                        team_2_name: ''
                    }
                };
                localStorage['header-matches'] = JSON.stringify(this.matches)
                bus.$emit('header-matches-event')
            },

            allPlayersFree() {
                localStorage['free-players-ids'] = localStorage['all-players-ids'];
                localStorage['free-watchers-ids'] = localStorage['all-watchers-ids'];
                delete localStorage['match1-players-ids'];
                delete localStorage['match2-players-ids'];
                delete localStorage['match3-players-ids'];
                delete localStorage['match1-players'];
                delete localStorage['match2-players'];
                delete localStorage['match3-players'];
                delete localStorage['match1-players-count'];
                delete localStorage['match2-players-count'];
                delete localStorage['match3-players-count'];

                delete localStorage['match1-watcher-id'];
                delete localStorage['match2-watcher-id'];
                delete localStorage['match3-watcher-id'];
                delete localStorage['match1-watcher'];
                delete localStorage['match2-watcher'];
                delete localStorage['match3-watcher'];
                delete localStorage['match1-watchers-count'];
                delete localStorage['match2-watchers-count'];
                delete localStorage['match3-watchers-count'];

                delete localStorage['match1-active-players'];
                delete localStorage['match2-active-players'];
                delete localStorage['match3-active-players'];

                this.players.matches_players.match1.out_button_pressed = true;
                this.players.matches_players.match2.out_button_pressed = true;
                this.players.matches_players.match3.out_button_pressed = true;
                this.players.matches_players.match1.enter_button_pressed = false;
                this.players.matches_players.match2.enter_button_pressed = false;
                this.players.matches_players.match3.enter_button_pressed = false;
                this.players.matches_players.match1.players_count = 0;
                this.players.matches_players.match2.players_count = 0;
                this.players.matches_players.match3.players_count = 0;
                this.watchers.matches_watchers.match1.watchers_count = 0;
                this.watchers.matches_watchers.match2.watchers_count = 0;
                this.watchers.matches_watchers.match3.watchers_count = 0;
                this.watchers.matches_watchers.match1.watcher_id = null;
                this.watchers.matches_watchers.match2.watcher_id = null;
                this.watchers.matches_watchers.match3.watcher_id = null;

                this.fillMatchPlayers();
            },

            goRandomPlayers(match, needPlayersCount) {

                if (needPlayersCount > 0 && needPlayersCount !== null && this.w_free !== 0) {
                    this.players.free_players.players_ids = JSON.parse(localStorage['free-players-ids']);
                    this.watchers.free_watchers.watchers_ids = JSON.parse(localStorage['free-watchers-ids'])
                    localStorage[`${match}-players-ids`] = JSON.stringify(randomFromPlayersArray(this.players.free_players.players_ids, needPlayersCount));
                    localStorage[`${match}-watcher-id`] = JSON.stringify(randomFromPlayersArray(this.watchers.free_watchers.watchers_ids, 1));
                    localStorage['free-players-ids'] = JSON.stringify(this.players.free_players.players_ids);
                    localStorage['free-watchers-ids'] = JSON.stringify(this.watchers.free_watchers.watchers_ids);

                    let index = -1;
                    let w_index = -1;
                    try {
                        console.log(JSON.parse(localStorage[`${match}-players-ids`]));
                        let all_players = JSON.parse(localStorage['all-players']);
                        let match1_players_ids = JSON.parse(localStorage[`${match}-players-ids`]);
                        let match1_players = [];

                        let all_watchers = JSON.parse(localStorage['all-watchers']);
                        let match1_watcher_id = JSON.parse(localStorage[`${match}-watcher-id`]);
                        let match1_watcher = [];

                        all_watchers.forEach(elem => {
                            match1_watcher_id.forEach(el => {
                                if (elem.player_id == el) {
                                    w_index++;
                                    match1_watcher.push(elem)
                                }
                            })
                        });

                        localStorage[`${match}-watcher`] = JSON.stringify(match1_watcher);


                        all_players.forEach(elem => {
                            match1_players_ids.forEach(el => {
                                if (elem.player_id == el) {
                                    index++;
                                    match1_players.push(elem)
                                }
                            })
                        })

                        localStorage[`${match}-players`] = JSON.stringify(match1_players);
                    } catch (e) {
                        console.log(e)
                    }

                    if (match === 'match1') {
                        this.players.matches_players.match1.enter_button_pressed = true;
                        this.players.matches_players.match1.out_button_pressed = false;
                        localStorage['match1-players-count'] = index + 1;
                        localStorage['match1-watchers-count'] = w_index + 1;
                        this.players.matches_players.match1.players_count = index + 1;
                        this.watchers.matches_watchers.match1.watchers_count = w_index + 1;
                        this.watchers.matches_watchers.match1.watcher_id = JSON.parse(localStorage['match1-watcher-id'])[0];
                        console.log(this.watchers.matches_watchers.match1.watcher_id)
                        this.fillMatchPlayers()


                    }
                    if (match === 'match2') {
                        this.players.matches_players.match2.enter_button_pressed = true;
                        this.players.matches_players.match2.out_button_pressed = false;
                        localStorage['match2-players-count'] = index + 1;
                        localStorage['match2-watchers-count'] = w_index + 1;
                        this.players.matches_players.match2.players_count = index + 1;
                        this.watchers.matches_watchers.match2.watchers_count = w_index + 1;
                        this.watchers.matches_watchers.match2.watcher_id = JSON.parse(localStorage['match2-watcher-id'])[0];
                        console.log(this.watchers.matches_watchers.match2.watcher_id)
                        this.fillMatchPlayers()
                    }
                    if (match === 'match3') {
                        this.players.matches_players.match3.enter_button_pressed = true;
                        this.players.matches_players.match3.out_button_pressed = false;
                        localStorage['match3-players-count'] = index + 1;
                        localStorage['match3-watchers-count'] = w_index + 1;
                        this.players.matches_players.match3.players_count = index + 1;
                        this.watchers.matches_watchers.match3.watchers_count = w_index + 1;
                        this.watchers.matches_watchers.match3.watcher_id = JSON.parse(localStorage['match3-watcher-id'])[0];
                        console.log(this.watchers.matches_watchers.match3.watcher_id)
                        this.fillMatchPlayers()
                    }
                }
            },

            outMatchPlayers(match) {
                if (match === 'match1') {

                    this.players.matches_players.match1.players_count = 0;
                    this.watchers.matches_watchers.match1.watchers_count = 0;
                    this.players.matches_players.match1.out_button_pressed = true;
                    this.players.matches_players.match1.enter_button_pressed = false;
                    this.players.matches_players.match1.players_ids = JSON.parse(localStorage['match1-players-ids']);

                    this.watchers.matches_watchers.match1.watcher_id = JSON.parse(localStorage['match1-watcher-id']);

                    delete localStorage['match1-players-ids'];
                    delete localStorage['match1-players'];
                    delete localStorage['match1-players-count'];

                    delete localStorage['match1-watcher-id'];
                    delete localStorage['match1-watcher'];
                    delete localStorage['match1-watchers-count'];

                    this.players.free_players.players_ids = JSON.parse(localStorage['free-players-ids']);
                    this.players.matches_players.match1.players_ids.forEach(elem => {
                        this.players.free_players.players_ids.push(elem)
                    });
                    localStorage['free-players-ids'] = JSON.stringify(this.players.free_players.players_ids)

                    this.watchers.free_watchers.watchers_ids = JSON.parse(localStorage['free-watchers-ids']);
                    this.watchers.matches_watchers.match1.watcher_id.forEach(elem => {
                        this.watchers.free_watchers.watchers_ids.push(elem)
                    })

                    localStorage['free-watchers-ids'] = JSON.stringify(this.watchers.free_watchers.watchers_ids);
                    delete localStorage['match1-watcher-id'];
                    this.watchers.matches_watchers.match1.watcher_id = null

                    this.fillMatchPlayers();
                }
                if (match === 'match2') {
                    this.players.matches_players.match2.players_count = 0;
                    this.watchers.matches_watchers.match2.watchers_count = 0;
                    this.players.matches_players.match2.out_button_pressed = true;
                    this.players.matches_players.match2.enter_button_pressed = false;
                    this.players.matches_players.match2.players_ids = JSON.parse(localStorage['match2-players-ids']);

                    this.watchers.matches_watchers.match2.watcher_id = JSON.parse(localStorage['match2-watcher-id']);

                    delete localStorage['match2-players-ids'];
                    delete localStorage['match2-players'];
                    delete localStorage['match2-players-count'];

                    delete localStorage['match2-watcher-id'];
                    delete localStorage['match2-watcher'];
                    delete localStorage['match2-watchers-count'];

                    this.players.free_players.players_ids = JSON.parse(localStorage['free-players-ids']);
                    this.players.matches_players.match2.players_ids.forEach(elem => {
                        this.players.free_players.players_ids.push(elem)
                    });
                    localStorage['free-players-ids'] = JSON.stringify(this.players.free_players.players_ids)

                    this.watchers.free_watchers.watchers_ids = JSON.parse(localStorage['free-watchers-ids']);
                    this.watchers.matches_watchers.match2.watcher_id.forEach(elem => {
                        this.watchers.free_watchers.watchers_ids.push(elem)
                    })

                    localStorage['free-watchers-ids'] = JSON.stringify(this.watchers.free_watchers.watchers_ids);
                    delete localStorage['match2-watcher-id'];
                    this.watchers.matches_watchers.match2.watcher_id = null

                    this.fillMatchPlayers();
                }
                if (match === 'match3') {
                    this.players.matches_players.match3.players_count = 0;
                    this.watchers.matches_watchers.match3.watchers_count = 0;
                    this.players.matches_players.match3.enter_button_pressed = false
                    this.players.matches_players.match3.out_button_pressed = true;
                    this.players.matches_players.match3.players_ids = JSON.parse(localStorage['match3-players-ids']);
                    this.watchers.matches_watchers.match3.watcher_id = JSON.parse(localStorage['match3-watcher-id']);

                    delete localStorage['match3-players-ids'];
                    delete localStorage['match3-players'];
                    delete localStorage['match3-players-count'];

                    delete localStorage['match3-watcher-id'];
                    delete localStorage['match3-watcher'];
                    delete localStorage['match3-watchers-count'];

                    this.players.free_players.players_ids = JSON.parse(localStorage['free-players-ids']);
                    this.players.matches_players.match3.players_ids.forEach(elem => {
                        this.players.free_players.players_ids.push(elem)
                    });
                    localStorage['free-players-ids'] = JSON.stringify(this.players.free_players.players_ids)

                    this.watchers.free_watchers.watchers_ids = JSON.parse(localStorage['free-watchers-ids']);
                    this.watchers.matches_watchers.match3.watcher_id.forEach(elem => {
                        this.watchers.free_watchers.watchers_ids.push(elem)
                    })

                    localStorage['free-watchers-ids'] = JSON.stringify(this.watchers.free_watchers.watchers_ids);
                    delete localStorage['match3-watcher-id'];
                    this.watchers.matches_watchers.match3.watcher_id = null

                    this.fillMatchPlayers()
                }
            }
        },
        watch: {},

        computed: {
            free() {
                return this.players.all_players.players_count - this.players.matches_players.match1.players_count - this.players.matches_players.match2.players_count - this.players.matches_players.match3.players_count;

            },

            w_free() {
                return this.watchers.all_watchers.watchers_count - this.watchers.matches_watchers.match1.watchers_count - this.watchers.matches_watchers.match2.watchers_count - this.watchers.matches_watchers.match3.watchers_count
            }
        },

        created() {
            setTimeout(() => {
                /*
                all players
                * */

                let all_players = JSON.parse(localStorage['all-players-ids']);
                all_players.forEach(elem => {
                    this.players.all_players.players_count++
                });

                /*
                all watchers
                * */
                let all_watchers = JSON.parse(localStorage['all-watchers-ids']);
                all_watchers.forEach(elem => {
                    this.watchers.all_watchers.watchers_count++;
                })

                console.log(this.players.all_players.players_count)
                /*
                free players
                * */

                if (localStorage['match1-players-count'] !== undefined) {
                    this.players.matches_players.match1.players_count = localStorage['match1-players-count'];
                    this.watchers.matches_watchers.match1.watchers_count = localStorage['match1-watchers-count'];
                    this.players.matches_players.match1.enter_button_pressed = true
                    this.players.matches_players.match1.out_button_pressed = false
                }

                if (localStorage['match2-players-count'] !== undefined) {
                    this.players.matches_players.match2.players_count = localStorage['match2-players-count'];
                    this.watchers.matches_watchers.match2.watchers_count = localStorage['match2-watchers-count'];
                    this.players.matches_players.match2.enter_button_pressed = true
                    this.players.matches_players.match2.out_button_pressed = false
                }

                if (localStorage['match3-players-count'] !== undefined) {
                    this.players.matches_players.match3.players_count = localStorage['match3-players-count'];
                    this.watchers.matches_watchers.match3.watchers_count = localStorage['match3-watchers-count'];
                    this.players.matches_players.match3.enter_button_pressed = true
                    this.players.matches_players.match3.out_button_pressed = false
                }

                if (localStorage['match1-watcher-id']) {
                    this.watchers.matches_watchers.match1.watcher_id = JSON.parse(localStorage['match1-watcher-id'])[0];
                }
                if (localStorage['match2-watcher-id']) {
                    this.watchers.matches_watchers.match2.watcher_id = JSON.parse(localStorage['match2-watcher-id'])[0];
                }
                if (localStorage['match3-watcher-id']) {
                    this.watchers.matches_watchers.match3.watcher_id = JSON.parse(localStorage['match3-watcher-id'])[0];
                }








            }, 1000);

            this.matches = JSON.parse(localStorage['header-matches'])

        }
    }
</script>

<style scoped>


    .item {
        width: 30%;
        min-height: 50px;
        background-color: gainsboro;
    }

    .match_count_card {
        padding-top: 40px;
    }

    .disable-events {
        pointer-events: none;
        opacity: 0.6;
    }
</style>
