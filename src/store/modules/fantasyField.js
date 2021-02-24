import Vue from "vue";
const state = {
  fantasyTeam: {
    shortstop: null,
    thirdBaseman: null,
    startingPitcher: null,
    centerFielder: null,
    rightFielder: null,
    secondBaseman: null,
    leftFielder: null,
    firstBaseman: null,
    catcher: null,
    reliefPitcher: null,
    designatedHitter: null,
  },
};

const mutations = {
  SET_FANTASY_TEAM(state, fantasyField) {
    state.fantasyTeam = fantasyField;
  },
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
  SET_SECOND_BASEMAN(state, name) {
    state.fantasyTeam.secondBaseman = name;
  },
  SET_LEFT_FIELDER(state, name) {
    state.fantasyTeam.leftFielder = name;
  },
  SET_FIRST_BASEMAN(state, name) {
    state.fantasyTeam.firstBaseman = name;
  },
  SET_CATCHER(state, name) {
    state.fantasyTeam.catcher = name;
  },
  SET_RELIEF_PITCHER(state, name) {
    state.fantasyTeam.reliefPitcher = name;
  },
  SET_DESIGNATED_HITTER(state, name) {
    state.fantasyTeam.designatedHitter = name;
  },
};

const actions = {
  loadData({ commit }) {
    Vue.http
      .get("data.json")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const fantasyTeam = data.fantasyField;
          commit("SET_FANTASY_TEAM", fantasyTeam);
        }
      });
  },
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
  setSecondBaseman({ commit }, name) {
    commit("SET_SECOND_BASEMAN", name);
  },
  setLeftFielder({ commit }, name) {
    commit("SET_LEFT_FIELDER", name);
  },
  setFirstBaseman({ commit }, name) {
    commit("SET_FIRST_BASEMAN", name);
  },
  setCatcher({ commit }, name) {
    commit("SET_CATCHER", name);
  },
  setReliefPitcher({ commit }, name) {
    commit("SET_RELIEF_PITCHER", name);
  },
  setDesignatedHitter({ commit }, name) {
    commit("SET_DESIGNATED_HITTER", name);
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
  secondBaseman: (state) => {
    return state.fantasyTeam.secondBaseman;
  },
  leftFielder: (state) => {
    return state.fantasyTeam.leftFielder;
  },
  firstBaseman: (state) => {
    return state.fantasyTeam.firstBaseman;
  },
  catcher: (state) => {
    return state.fantasyTeam.catcher;
  },
  reliefPitcher: (state) => {
    return state.fantasyTeam.reliefPitcher;
  },
  designatedHitter: (state) => {
    return state.fantasyTeam.designatedHitter;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
