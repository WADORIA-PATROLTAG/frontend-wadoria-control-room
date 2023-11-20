import { get, post } from "@/http";
/**
 * Vuex state
 * @returns Object state
 * */
const state = {
  agences: [],
};

/**
 * Vuex mutation
 * @returns Object mutation
 * */
const setters = {
  SET_AGENCES: (state, data) => (state.agences = data),
};

/**
 * Vuex Getters
 * @returns Object Getters
 * */

const getters = {
  GET_AGENCES: (state) => state.agences,
};

/**
 * Vuex actions
 * @returns Object Actions
 * */
const actions = {
  /**
   * GET List of agences
   * @returns HttpResponse
   * */
  async getAgences({ commit }, payload) {
    const { data, status } = await get("agences/all");
    if (status === 200) {
      const results = data.agences;
      let agences = [];
      if (payload !== undefined) {
        results.forEach((e) => {
          if (e.province.toLowerCase().includes(payload.toLowerCase())) {
            agences.push(e);
          }
        });
      } else {
        agences = results;
      }
      commit("SET_AGENCES", agences);
      return agences;
    }
    return [];
  },
};

const erp = {
  namespaced: true,
  state: state,
  mutations: setters,
  getters: getters,
  actions: actions,
};
export default erp;
