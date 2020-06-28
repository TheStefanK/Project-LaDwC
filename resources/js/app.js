import Vue from 'vue'
import App from './App.vue'
import store from './store/index';
import router from './routes/index';
import Vuex from 'vuex'

Vue.use(Vuex);


console.log('JavaScript on');


 new Vue({
   store,router,
    render: h => h(App)
}).$mount('#app');
