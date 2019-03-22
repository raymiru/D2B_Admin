<template>
    <v-app id="app" v-if="user === 'RayMiru'" style="background-color: whitesmoke">
        <Header></Header>
        <keep-alive>
            <router-view></router-view>
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
                user: localStorage['user']
            }
        }

    }

</script>
