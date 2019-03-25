<template>
    <v-app id="app" v-if="password === 'RayMiru'" style="background-color: whitesmoke">
        <Header></Header>
        <keep-alive>
            <router-view v-bind:players="players"></router-view>
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
                password: localStorage['password']
            }
        },

        sockets: {
            player_info_update: function (data) {
                let index = this.players.findIndex(e => e.steam_username === data.steam_username);
                if (index === -1 && !data.disconnected) this.players.push(data);
                else if (index !== -1 && !data.disconnected) this.players.splice(index, 1, data);
                else if (data.disconnected) this.players.splice(index, 1)
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
