<template>
    <v-toolbar dark >

        <v-toolbar-title class="white--text" to="/"><v-list-tile to="/">D2BETS</v-list-tile></v-toolbar-title>

        <v-spacer></v-spacer>

        <v-list-tile dark icon to="/match">MATCH

        </v-list-tile>

        <v-list-tile icon to="/players">
            ACCOUNTS
        </v-list-tile>

        <v-btn icon>
            <v-icon>refresh</v-icon>
        </v-btn>

    </v-toolbar>
</template>

<script>

    export default {
        name: 'Header',
        data() {
            return {
                drawer: false,
                clipped: false,
                items: [
                    {
                        title: 'MATCH',
                        path: '/match',
                        items: [],
                    },
                    {

                        title: 'PLAYERS',
                        path: '/players',
                        items: []
                    }]
            }
        }
    }
</script>
