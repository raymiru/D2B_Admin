import Vue from "vue";
import Router from 'vue-router'
import App from './App'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import VueSocketIO from 'vue-socket.io'
import {setHost} from "./config";



console.log(host.dev);

const router =  new Router({
    routes: [
        {
            path: '/match',
            component: () => import("./views/Match"),
            props: true
        },
        {
            path: '/players',
            component: () => import('./views/Players'),
            props: true
        },

        {
            path: '/', redirect: '/match'
        }
    ]
});



Vue.use(Router);

Vue.use(Vuetify);

Vue.use(new VueSocketIO({
    debug: true,
    connection: setHost()
}));

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
