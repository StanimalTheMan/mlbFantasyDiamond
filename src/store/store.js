import Vue from "vue";
import Vuex from "vuex";

import fantasyField from "./modules/fantasyField";
// import shortstops from "./modules/shortstops";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { fantasyField },
});
