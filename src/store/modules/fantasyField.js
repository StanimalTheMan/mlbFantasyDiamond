const state = {
  fantasyTeam: { shortstop: null, thirdBaseman: null, startingPitcher: null },
};

const mutations = {
  SET_SHORTSTOP(state, name) {
    state.fantasyTeam.shortstop = name;
  },
  SET_STARTING_PITCHER(state, name) {
    state.fantasyTeam.startingPitcher = name;
  },
  SET_THIRD_BASEMAN(state, name) {
    state.fantasyTeam.thirdBaseman = name;
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
};

export default {
  state,
  mutations,
  actions,
  getters,
};
