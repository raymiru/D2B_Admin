import Vue from "vue";
import App from './App'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import VueSocketIO from 'vue-socket.io'
import {setHost} from "./config";
import router from './router'



Vue.use(Vuetify);
Vue.use(new VueSocketIO({
    debug: true,
    connection: setHost()
}));


new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
