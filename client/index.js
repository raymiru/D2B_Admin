import Vue from "vue";
import App from './src/App'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import VueSocketIO from 'vue-socket.io'


const setHost = () => {
    if (localStorage['dev'] === '1') {
        return 'http://localhost:4000'
    } else {
        return 'http://35.246.13.97/'
    }
};


export const zplayCon = new VueSocketIO({
    debug: true,
    connection: 'http://1zplay.com:8080',
    options: {
        transports: ['websocket']
    }

});

Vue.use(Vuetify);
Vue.use(new VueSocketIO({
    debug: true,
    connection: setHost()
}));


new Vue({
    el: '#app',
    render: h => h(App)
});
