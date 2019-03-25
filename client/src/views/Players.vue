<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-content>
        <v-container>
            <v-flex>
                <v-layout row wrap style="margin-top: 20px">
                    <v-flex class="ma-2">
                        <v-data-table
                                :headers="headers"
                                :items="players"
                                class="elevation-1"
                        >
                            <template v-slot:items="props">
                                <td>{{ props.item.player_id }}</td>
                                <td>{{ props.item.steam_username }}</td>
                                <td>{{ props.item.bank }}</td>

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
                    {text: 'Bank', value: 'bank'},

                ]
            }

        },
        props: {
            players: Array
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
