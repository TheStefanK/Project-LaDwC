const state = {
  infected: 0,
  dead: 0,
  // time spend
  elapsedTime: 0,
  timer: undefined,
//  AKW
  akw: 0,
};

const getters = {
  // All Stats
  getScoreStats: state => {
    return state;
  },
  // Infected People Getters
  getInfected: state => {
    return state.infected;
  },
  getInfectedCalc: state => {
    return (state.infected - state.dead);
  },
  // Dead People Getters
  getDead: state => {
    return state.dead;
  },
//  Akw
  getAkwDead: state => {
    return state.akw;
  },
};

const mutations = {
  // Set the new infected value
  setInfectedValue: (state, value) => {
    state.infected = value;
  },
  // Set the new dead value
  setDeadValue: (state, value) => {
    state.dead = value;
  },
  // Set the new dead value
  setAkwValue: (state, value) => {
    state.akw = value;
  },

};

const actions = {
  // Handle changes of infected / dead value
  handleChangeInfectedValue({commit}, payload) {
    commit('setInfectedValue', payload);
  },
  handleChangeDeadValue({commit}, payload) {
    commit('setDeadValue', payload);
  },
  handleChangeAkwValue({commit}, payload) {
    commit('setAkwValue', payload);
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}
