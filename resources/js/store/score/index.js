const state = {
  // infected people and infected pointer
  infected: 4,
  infectedPointer: -90,
  // dead people and dead pointer
  dead: 0,
  deadPointer: -90,
  // time spend
  elapsedTime: 0,
  timer: undefined,
  //multiplier
  infectedMultiplier: 0.01,
  deadMultiplier: 0.1,
  intervalTimer: 1000,
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
  getInfectedPointer: state => {
    return state.infectedPointer;
  },
  getInfectedCalc: state => {
  return (state.infected - state.dead);
  },

  // Dead People Getters
  getDead: state => {
    return state.dead;
  },
  getDeadPointer: state => {
    return state.deadPointer;
  },
  // Multiplier Getters
  getInfectedMultiplier: state => {
    return state.infectedMultiplier;
  }, getDeadMultiplier: state => {
    return state.deadMultiplier;
  }
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

  // Set Pointer value
  setInfectedPointer:(state,value) => {
    state.infectedPointer = value
  },
  setDeadPointer:(state,value) => {
    state.deadPointer = value
  }
};

const actions = {
  // Handle changes of infected value
  handleChangeInfectedValue({commit}, payload) {
    commit('setInfectedValue', payload);
  },
  // Handle changes of Pointer value
  handleChangeInfectedPointer({commit}, payload) {
    commit('setInfectedPointer', payload);
  },
  handleChangeDeadPointer({commit}, payload) {
    commit('setDeadPointer', payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
