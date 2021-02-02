const state = {
  fantasyTeam: { shortstop: null },
};

const mutations = {
  SET_SHORTSTOP(state, name) {
    state.fantasyTeam.shortstop = name;
  },
};

const actions = {
  // actions have access to context object
  setShortstop({ commit }, name) {
    commit("SET_SHORTSTOP", name);
  },
};

const getters = {
  fantasyTeam: (state) => {
    return state.fantasyTeam;
  },
  shortstop: (state) => {
    console.log(state.fantasyTeam.shortstop);
    return state.fantasyTeam.shortstop;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
