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

            // player_info_update: function (data) {
            //     let index = this.players.findIndex(e => e.steam_username === data.steam_username);
            //     if (index === -1 && !data.disconnected) setTimeout(() => {
            //         this.players.push(data)
            //     }, 400);
            //     else if (index !== -1 && !data.disconnected) setTimeout(() => {
            //         this.players.splice(index, 1, data)
            //     }, 400);
            //     else if (index !== -1 && data.disconnected) setTimeout(() => {
            //         this.players.splice(index, 1)
            //     }, 400)
            // },

            admin_reload_player_info_update: function (data) {
                this.players = data
            },


        },
        created() {
            this.$socket.emit('login', {
                user_id: 0,
                steam_username: 'admin',
                permission: 'admin'
            });
        },


    }

</script>
