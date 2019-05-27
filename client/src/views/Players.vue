<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-content>
        <v-container>
            <v-flex>
                <v-layout row wrap style="margin-top: 20px">
                    <v-flex class="ma-2">
                        <v-data-table
                                :headers="headers"
                                :items="players"
                                :footer="players"
                                class="elevation-1"
                        >
                            <template v-slot:items="props">
                                <td>{{ props.item.player_id }}</td>
                                <td>{{ props.item.steam_username }}</td>
                                <td>{{ props.item.team_1_bet.total_bet }}</td>
                                <td>{{ props.item.team_1_bet.total_odds }}</td>
                                <td>{{ props.item.team_1_bet.total_pwin }}</td>
                                <td>{{ props.item.team_2_bet.total_bet }}</td>
                                <td>{{ props.item.team_2_bet.total_odds}}</td>
                                <td>{{ props.item.team_2_bet.total_pwin }}</td>
                                <td>{{ props.item.bank }}</td>

                            </template>
                            <template v-slot:footer>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>{{pwin_team1}}</td>
                                <td></td>
                                <td></td>
                                <td>{{pwin_team2}}</td>
                                <td style="background-color: blanchedalmond;">{{summary}}</td>
                            </template>
                        </v-data-table>
                    </v-flex>

                </v-layout>
            </v-flex>
        </v-container>
    </v-content>
</template>

<script>
    import {randomFromPlayersArray} from "../services/ProfitService/randomFromArray";


    export default {
        name: "Players",
        data() {
            return {
                headers: [
                    {text: 'ID', value: 'player_id'},
                    {text: 'Steam Username', value: 'steam_username'},
                    {text: 'Team 1 Bet', value: 'bank'},
                    {text: 'Team 1 Odds', value: 'bank'},
                    {text: 'Team 1 P.Win', value: 'bank'},
                    {text: 'Team 2 Bet', value: 'bank'},
                    {text: 'Team 2 Odds', value: 'bank'},
                    {text: 'Team 2 P.Win', value: 'bank'},
                    {text: 'Bank', value: 'bank'},
                ],

            }

        },
        props: {
            players: Array,
            usd: Number
        },
        methods: {},
        watch: {
            players: function (data) {
                this.players.forEach(elem => {
                    if (elem.currency === 'rub') {
                        elem.team_1_bet.total_bet = (elem.team_1_bet.total_bet / this.usd).toFixed(2);
                        elem.team_1_bet.total_pwin = (elem.team_1_bet.total_pwin / this.usd).toFixed(2);
                        elem.team_2_bet.total_bet = (elem.team_2_bet.total_bet / this.usd).toFixed(2);
                        elem.team_2_bet.total_pwin = (elem.team_2_bet.total_pwin / this.usd).toFixed(2);
                        elem.bank = (elem.bank / this.usd).toFixed(2);
                    }
                })
            }
        },
        created() {
            let freePlayersIDs = [];
            let matchPlayersIDs = [];
            let matchObj = {
                player_list: {},
                team1_bet: {},
                team2_bet: {}
            }, i


            setTimeout(() => {


                this.players.forEach(elem => {
                    if (elem.currency === 'rub') {
                        elem.team_1_bet.total_bet = (elem.team_1_bet.total_bet / this.usd).toFixed(2);
                        elem.team_1_bet.total_pwin = (elem.team_1_bet.total_pwin / this.usd).toFixed(2);
                        elem.team_2_bet.total_bet = (elem.team_2_bet.total_bet / this.usd).toFixed(2);
                        elem.team_2_bet.total_pwin = (elem.team_2_bet.total_pwin / this.usd).toFixed(2);
                        elem.bank = (elem.bank / this.usd).toFixed(2);
                    }
                })
                this.players.forEach(elem => {
                    freePlayersIDs.push(elem.player_id)
                })




                localStorage['freePlayersIDs'] = JSON.stringify(freePlayersIDs);

                 matchPlayersIDs = randomFromPlayersArray(JSON.parse(localStorage['freePlayersIDs']),2)

                for (i = 0; i < matchPlayersIDs.length; i++) {
                    matchObj.player_list[i] = {
                        id: matchPlayersIDs[i],
                        team1_bet: {
                            bet_summ: 20,
                            koef_summ: 1.82,
                            dohod: 36.4,
                            pribil: 16.4
                        },
                        team2_bet: {}
                    }
                }
                matchObj.bet_summ = 0;
                for (let prop in matchObj.player_list) {

                    matchObj.bet_summ += matchObj.player_list[prop].team1_bet.bet_summ
                }

                console.log(matchObj.bet_summ)

                console.log('matchobj')
                console.log(matchObj)

                localStorage['match-1'] = JSON.stringify(matchObj)


            }, 500)


        },
        computed: {
            summary: function () {
                let summ = 0;
                this.players.forEach(elem => {
                    summ += parseFloat(elem.bank)

                });
                return summ.toFixed(2)
            },
            pwin_team1: function () {
                let pwin_team1 = 0;
                this.players.forEach(elem => {
                    pwin_team1 += parseFloat(elem.team_1_bet.total_pwin)
                });
                return pwin_team1.toFixed(2)
            },
            pwin_team2: function () {
                let pwin_team2 = 0;
                this.players.forEach(elem => {
                    pwin_team2 += parseFloat(elem.team_2_bet.total_pwin)
                });
                return pwin_team2.toFixed(2)
            }
        },


    }

</script>

<style scoped>

</style>
