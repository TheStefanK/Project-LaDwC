import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);
//modules imports
import storyline from './storyline'



export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    storyline
  },
});
