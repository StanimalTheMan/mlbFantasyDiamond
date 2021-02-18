const state = {
  fantasyTeam: {
    shortstop: null,
    thirdBaseman: null,
    startingPitcher: null,
    centerFielder: null,
    rightFielder: null,
  },
};

const mutations = {
  SET_SHORTSTOP(state, name) {
    state.fantasyTeam.shortstop = name;
  },
  SET_THIRD_BASEMAN(state, name) {
    state.fantasyTeam.thirdBaseman = name;
  },
  SET_STARTING_PITCHER(state, name) {
    state.fantasyTeam.startingPitcher = name;
  },
  SET_CENTER_FIELDER(state, name) {
    state.fantasyTeam.centerFielder = name;
  },
  SET_RIGHT_FIELDER(state, name) {
    state.fantasyTeam.rightFielder = name;
  },
};

const actions = {
  // actions have access to context object
  setShortstop({ commit }, name) {
    commit("SET_SHORTSTOP", name);
  },
  setThirdBaseman({ commit }, name) {
    commit("SET_THIRD_BASEMAN", name);
  },
  setStartingPitcher({ commit }, name) {
    commit("SET_STARTING_PITCHER", name);
  },
  setCenterFielder({ commit }, name) {
    commit("SET_CENTER_FIELDER", name);
  },
  setRightFielder({ commit }, name) {
    commit("SET_RIGHT_FIELDER", name);
  },
};

const getters = {
  fantasyTeam: (state) => {
    return state.fantasyTeam;
  },
  shortstop: (state) => {
    return state.fantasyTeam.shortstop;
  },
  thirdBaseman: (state) => {
    return state.fantasyTeam.thirdBaseman;
  },
  startingPitcher: (state) => {
    return state.fantasyTeam.startingPitcher;
  },
  centerFielder: (state) => {
    return state.fantasyTeam.centerFielder;
  },
  rightFielder: (state) => {
    return state.fantasyTeam.rightFielder;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
