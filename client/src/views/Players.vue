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
                                <td>{{ props.item.bank }}</td>
                                <td>{{ props.item.bank }}</td>
                                <td>{{ props.item.bank }}</td>
                                <td>{{ props.item.bank }}</td>

                            </template>
                            <template v-slot:footer>
                                <td></td><td></td><td></td><td></td><td></td>
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
                    {text: 'Bet', value: 'bank'},
                    {text: 'Odds', value: 'bank'},
                    {text: 'P.Win', value: 'bank'},
                    {text: 'Bank', value: 'bank'},
                ],

            }

        },
        props: {
            players: Array
        },
        methods: {},
        computed: {
            summary: function () {
                let summ = 0;
                this.players.forEach(elem => {
                    summ += parseFloat(elem.bank)
                });
                return summ.toFixed(2)
            }
        }
    }

            // players: function (data) {
            //     data.forEach(elem => {
            //         this.summary += parseFloat(elem.bank)
            //     })
            // }


</script>

<style scoped>

</style>
