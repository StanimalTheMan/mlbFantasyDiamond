const state = {
  fantasyTeam: { shortstop: null, startingPitcher: null },
};

const mutations = {
  SET_SHORTSTOP(state, name) {
    state.fantasyTeam.shortstop = name;
  },
  SET_STARTING_PITCHER(state, name) {
    state.fantasyTeam.startingPitcher = name;
  },
};

const actions = {
  // actions have access to context object
  setShortstop({ commit }, name) {
    commit("SET_SHORTSTOP", name);
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
