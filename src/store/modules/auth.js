import { post } from "@/http";


/**
 * Vuex state
 * @returns Object state
 * */
const states = {
    user: null,
};

/**
 * Vuex mutation
 * @returns Object setters
 * */
const setters = {
    SET_USER: (state, data) => state.user = data,
};

/**
 * Vuex getters
 * @returns Object getters
 * */
const getters = {
    GET_USER: (state) => state.user,
};



/**
 * Vuex actions
 * @returns Object actions
 * */
const actions = {

    /**
     * Login to application
     * @param context vuex context,
     * @param form request formData,
     * @returns HttpResponse
     * */
    async loggedIn(context, form) {
        console.log(JSON.stringify(form))
        let { data, status } = await post('api/login', form);

        if (data.response !== undefined) {
            if (data.response.status !== undefined && data.response.status === "success") {
                localStorage.setItem('biotime-user-token', data.response.auth.token);
            }
        }
        return data;
    },


    /**
     * Refresh logged User
     * @param commit mutator
     * @returns void
     * */
    async refreshLoggedUser({ commit }) {
        let user = localStorage.getItem("biotime-user-token");
        user = JSON.parse(user);
        commit("SET_USER", user);
    },

    /**
     * Log Out
     * @param commit mutator
     * @returns void
     * */
    async loggedOut({ commit }) {
        localStorage.removeItem("biotime-user-token");
        commit("SET_USER", null);
    },
};

const auth = {
    namespaced: true,
    state: states,
    mutations: setters,
    getters: getters,
    actions: actions,
};

export default auth;