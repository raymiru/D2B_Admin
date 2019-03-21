import Vue from "vue";
import App from './src/App'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import VueSocketIO from 'vue-socket.io'
import {setHost} from "./src/config";
import io from 'socket.io-client'
import VueRouter from 'vue-router'


export const zplaySocket = io('http://1zplay.com:8080', {
        transports: ['websocket'],
        autoConnect: false
    }
);
export const zplaySocketReserve = io('http://1zplay.com:8080', {
        transports: ['websocket'],
        autoConnect: false
    }
);


Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(zplaySocket);
Vue.use(new VueSocketIO({
    debug: true,
    connection: setHost()
}));



new Vue({
    el: '#app',
    render: h => h(App)
});
