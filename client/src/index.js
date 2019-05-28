import Vue from "vue";
import Router from 'vue-router'
import App from './App'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import VueSocketIO from 'vue-socket.io'
import {setHost} from "./config";





const router =  new Router({
    routes: [
        {
            path: '/match/1',
            component: () => import("./views/Match"),
            props: true
        },
        {
            path: '/match/2',
            component: () => import("./views/Match2"),
            props: true
        },
        {
            path: '/match/3',
            component: () => import("./views/Match3"),
            props: true
        },
        {
            path: '/players',
            component: () => import('./views/Players'),
            props: true
        },

        {
            path: '/',
            // redirect: '/match'
            component: () => import('./views/Index')
        }
    ]
});



Vue.use(Router);

Vue.use(Vuetify);

Vue.use(new VueSocketIO({
    debug: false,
    connection: setHost()
}));

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
