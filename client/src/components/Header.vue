<template>
    <v-toolbar dark>

        <v-toolbar-title class="white--text" to="/">
            <v-list-tile to="/">D2BETS</v-list-tile>
        </v-toolbar-title>


        <v-spacer></v-spacer>
        <v-list-tile dark icon to="/match/1">
            <span class="mx-1">{{matches.match1.team_1_name}} </span>
            <span class="mx-1">-</span>
            <span class="mx-1">{{matches.match1.team_2_name}}</span>
        </v-list-tile>
        <v-list-tile dark icon to="/match/2">
            <span class="mx-1">{{matches.match2.team_1_name}}</span>
            <span class="mx-1">-</span>
            <span class="mx-1">{{matches.match2.team_2_name}}</span>
        </v-list-tile>
        <v-list-tile dark icon to="/match/3">
            <span class="mx-1">{{matches.match3.team_1_name}}</span>
            <span class="mx-1">-</span>
            <span class="mx-1">{{matches.match3.team_2_name}}</span>
        </v-list-tile>


        <v-spacer></v-spacer>
        <v-list-tile icon to="/players">
            ACCOUNTS
        </v-list-tile>

        <v-btn icon>
            <v-icon>refresh</v-icon>
        </v-btn>

    </v-toolbar>
</template>

<script>
    import {bus} from "../services/bus";


    export default {
        name: 'Header',
        data() {
            return {
                drawer: false,
                clipped: false,
                matches: {
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
                }
            }
        },

        created() {

            this.matches = JSON.parse(localStorage['header-matches']);


            bus.$on('header-matches-event', () => {
                console.log('header matches event')
                this.matches = JSON.parse(localStorage['header-matches']);
            })


        }
    }
</script>
