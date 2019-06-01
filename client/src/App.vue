<template>
    <v-app id="app" v-if="password === 'RayMiru'" style="background-color: whitesmoke">
        <Header></Header>
        <keep-alive>
            <router-view v-bind:players="players" v-bind:usd ="usd"></router-view>
        </keep-alive>
    </v-app>
</template>

<script>

    import Header from './components/Header'

    export default {
        name: 'App',
        components: {
            Header
        },
        data() {
            return {
                accounts: [],
                players: [],
                players_ids: [],
                watchers: [],
                watchers_ids: [],
                usd: parseInt(localStorage['usd']),
                password: localStorage['password']
            }
        },


        sockets: {

            admin_reload_player_info_update: function (data) {
                this.accounts = data;
                this.players = [];
                this.players_ids = [];
                this.watchers = [];
                this.watchers_ids = [];
                localStorage['all-accounts'] = JSON.stringify(this.accounts);

                this.accounts.forEach(elem => {
                    if (elem.permission === 'player') {
                        this.players.push(elem)
                        this.players_ids.push(elem.player_id)
                    } else if (elem.permission === 'watcher') {
                        this.watchers.push(elem);
                        this.watchers_ids.push(elem.player_id);
                    }
                });

                localStorage['all-players'] = JSON.stringify(this.players);
                localStorage['all-players-ids'] = JSON.stringify(this.players_ids);
                localStorage['all-watchers'] = JSON.stringify(this.watchers);
                localStorage['all-watchers-ids'] = JSON.stringify(this.watchers_ids);


                // this.players = data;
                // localStorage['all-players'] = JSON.stringify(this.players);
                // let allPlayersIds = [];
                // this.players.forEach(elem => {
                //     allPlayersIds.push(elem.player_id);
                // });
                // localStorage['all-players-ids'] = JSON.stringify(allPlayersIds);

            },


        },
        created() {
            setTimeout(() => {
                this.accounts = data;
                localStorage['all-accounts'] = JSON.stringify(this.accounts);

                this.accounts.forEach(elem => {
                    if (elem.permission === 'player') {
                        this.players.push(elem)
                        this.players_ids.push(elem.player_id)
                    } else if (elem.permission === 'watcher') {
                        this.watchers.push(elem);
                        this.watchers_ids.push(elem.player_id);
                    }
                });

                localStorage['all-players'] = JSON.stringify(this.players);
                localStorage['all-players-ids'] = JSON.stringify(this.players_ids);
                localStorage['all-watchers'] = JSON.stringify(this.watchers);
                localStorage['all-watchers-ids'] = JSON.stringify(this.watchers_ids);


            }, 700)


            this.$socket.emit('login', {
                user_id: 0,
                steam_username: 'admin',
                permission: 'admin'
            });



        },
        beforeCreate() {

        },

        mounted() {

        }

    }

</script>
