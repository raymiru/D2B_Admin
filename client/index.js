import Vue from "vue";
import App from './src/App'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import VueSocketIO from 'vue-socket.io'


Vue.use(Vuetify);
Vue.use(new VueSocketIO({
    debug: true,
    connection: 'https://35.246.13.97/'
}))

new Vue({
    el: '#app',
    render: h => h(App)
});
