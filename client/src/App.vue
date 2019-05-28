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
                players: [],
                usd: parseInt(localStorage['usd']),
                password: localStorage['password']
            }
        },


        sockets: {

            admin_reload_player_info_update: function (data) {
                this.players = data
                console.log('DATA')
                this.players.forEach(elem => {
                    if (elem)
                    console.log(elem)
                })
            },


        },
        created() {
            setTimeout(() => {
                localStorage['all-players'] = JSON.stringify(this.players);
                let allPlayersIds = [];
                this.players.forEach(elem => {
                    allPlayersIds.push(elem.player_id);
                });
                localStorage['all-players-ids'] = JSON.stringify(allPlayersIds);


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
