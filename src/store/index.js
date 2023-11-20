import { createStore } from "vuex";
import {get} from "@/http";

/*modules imports*/
import auth from "./modules/auth";
import biotimeModule from "./modules/biotime";
import ErpModule from "./modules/erp"

/*Crée un store central global qui permet d'ajouter des tiers modules */

const store = createStore({
    modules: {
        auth: auth,
        biotime: biotimeModule,
        erp:ErpModule
    },

    actions: {

        /**
         * Reusable HTTP GET Request function
         * @param commit mutation
         * @param url http url
         * @param setter commit mutation
         * @returns Promise resolve(data), reject(false)
         * */
        executeGetRequest: function ({commit}, url, setter) {
            let {data, status} = get(url);
            return Promise((resolve, reject) => {
                if (status === 200) {
                    resolve(data);
                    commit(setter, data);
                } else {
                    reject(false)
                }
            });
        },

        async getToken(context) {
            return localStorage.getItem('biotime-user-token');
        }
    }
});

export default store;