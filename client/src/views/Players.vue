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
                                <td></td><td></td><td></td><td></td><td>{{pwin_team1}}</td><td></td><td></td><td>{{pwin_team2}}</td>
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
              if (elem.currency === 'rub') {
                  elem.team_1_bet.total_bet =  (elem.team_1_bet.total_bet/this.usd).toFixed(2);
                  elem.team_1_bet.total_pwin = (elem.team_1_bet.total_pwin/this.usd).toFixed(2);
                  elem.team_2_bet.total_bet = (elem.team_2_bet.total_bet/this.usd).toFixed(2);
                  elem.team_2_bet.total_pwin = (elem.team_2_bet.total_pwin/this.usd).toFixed(2);
                  elem.bank = (elem.bank/this.usd).toFixed(2);
              }
          }
        },
        created() {

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

            // players: function (data) {
            //     data.forEach(elem => {
            //         this.summary += parseFloat(elem.bank)
            //     })
            // }


</script>

<style scoped>

</style>
