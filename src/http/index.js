import axios from "axios";

const baseURL = "http://backend-payroll.milleniumhorizon.com/";

/**
 * Create a new axios instance
 * */
const instance = axios.create({
    baseURL: location.href.includes('.com')  ? baseURL : 'http://127.0.0.1/backend_payroll/',
});


instance.interceptors.request.use((config) => {
    //NProgress.start();
    return config;
});

instance.interceptors.response.use((response) => {
    //NProgress.done();
    return response;
});

/***
 * Fait passer les requetes HTTP en GET ou en POST,
 * si data est defini c'est la requete POST qui sera lancée,
 * Autrement c'est la requete GET qui sera lancer
 * @param {String} [url=null]
 * @param {Object} form
 * @returns {data, status} data: http response if status equal 200 or 201
 */

export async function post(url, form) {
    let token = localStorage.getItem('biotime-user-token');
    let { data,status } = await instance.post(url, form, {
        headers: {
            'Authorization': token !== undefined ? `JWT ${token}` : null
        }
    });
    return {data, status};
}

export async function get(url) {
    let token = localStorage.getItem('biotime-user-token');
    let { data, status } = await instance.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token !== undefined ? `JWT ${token}` : null
        }
    });
    return {data, status};
}