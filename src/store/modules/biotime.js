import { get, post } from "@/http";
import { v4 as uuidv4 } from "uuid";
/**
 * Vuex state
 * @returns Object states
 * */
const states = {
  departments: [],
  agences: [],
  devices: [],
  employees: [],
  positions: [],
  areas: [],
};

/**
 * Vuex Mutations
 * @returns Object setters
 * */
const setters = {
  SET_DEPARTMENTS: (state, data) => (state.departments = data),
  SET_DEVICES: (state, data) => (state.devices = data),
  SET_EMPLOYEES: (state, data) => (state.employees = data),
  SET_POSITIONS: (state, data) => (state.positions = data),
  SET_AGENCES: (state, data) => (state.areas = data),
};

/**
 * Vuex Getters
 * @returns Object getters
 * */
const getters = {
  GET_DEPARTMENTS: (state) => state.departments,
  GET_DEVICES: (state) => state.devices,
  GET_EMPLOYEES: (state) => state.employees,
  GET_POSITIONS: (state) => state.positions,
  GET_AGENCES: (state) => state.agences,
  GET_AREAS: (state) => state.areas,
};

/**
 * Vuex Actions
 * @returns Object actions
 * */
const actions = {
  /**
   * All areas
   * @param commit vuex mutator
   * @returns Array areas
   */
  async allAreas({ commit }) {
    let { data } = await get("api/areas");
    if (data.response !== undefined) {
      const results = data.response.results.data;
      let areas = [];
      results.forEach((e) => {
        if (e.id !== 1) {
          areas.push(e);
        }
      });
      commit("SET_DEPARTMENTS", areas);
      return areas;
    }
    return [];
  },

  /**
   * Create Employee position
   * @param context vuex context,
   * @param form HttpRequest FormData,
   * @returns HttpResponse
   * */
  async createPosition(context, form) {
    let uuid = uuidv4();
    const formData = {
      fonction_code: uuid,
      libelle: form.libelle,
      user_id: "1",
    };
    const { data, status } = await post("api/createFonction", formData);
    if (data.response !== undefined) {
      return data;
    }
    return false;
  },

  async allPositions({ commit }) {
    const { data } = await get("api/fonctions");
    if (data.response !== undefined) {
      const allPos = data.response.results.data;
      let positions = [];
      allPos.forEach((e) => {
        if (e.id !== 1) {
          positions.push(e);
        }
      });
      commit("SET_POSITIONS", positions);
      return positions;
    }
    return [];
  },

  /**
   * Create Organization employees
   * @param context vuex context,
   * @param form HTTP Request formData,
   * @returns HttpResponse
   * */
  async createEmployee(context, form) {
    const { data, status } = await post("api/createAgent", form);
    if (data.response != undefined) {
      return data;
    }
    return false;
  },

  /**
   * Get Employees list
   * @param commit vuex mutator
   * @returns void
   * */
  async allEmployees({ commit }) {
    const { data, status } = await get("api/agents");
    if (data.response !== undefined) {
      const employees = data.response.results.data;
      commit("SET_EMPLOYEES", employees);
      return employees;
    }
    return [];
  },

  /**
   * Add Biotime device
   * @param context vuex context,
   * @param form Http Request data,
   * @returns HttpResponse
   * */
  async addDevice(context, form) {
    let formData = {
      serie: form.serie,
      libelle: form.libelle,
      adresse_ip: form.adresse_ip,
      user_id: "1",
      agence_id: form.agence_id,
    };
    const { data } = await post("api/addDevice", formData);
    return data;
  },

  /**
   * Get All biotime devices
   * @param commit mutator
   * @returns void
   * */
  async allDevices({ commit }) {
    let { data } = await get("api/devices");
    if (data.response !== undefined) {
      const results = data.response.results.data;
      let devices = [];
      results.forEach((e) => {
        e.checked = false;
        devices.push(e);
      });
      commit("SET_DEVICES", devices);
      return devices;
    }
    return [];
  },

  /**
   * Get all departments list
   * @param commit vuex context commit mutator
   * @returns Array departments
   */
  async allDepartments({ commit }) {
    let { data } = await get("api/departments");
    if (data.response !== undefined) {
      const allDepts = data.response.results.data;
      let depts = [];
      allDepts.forEach((e) => {
        if (e.id !== 1) {
          depts.push(e);
        }
      });
      commit("SET_DEPARTMENTS", depts);
      return depts;
    }
    return [];
  },

  /**
   * Create new department
   * @param context vuex context,
   * @param form form data
   * @returns httpResponse
   */
  async createDepartment(context, form) {
    let { data } = await post("api/createDepartment", form);
    if (data.response !== undefined) {
      return data;
    }
    return false;
  },

  /**
   * Create organization agency
   * @param context vuex context,
   * @param form Http Request FormData,
   * @returns HttpResponse
   * */
  async createAgence(context, form) {
    let formData = {
      code_zone: form.code_zone,
      libelle: form.libelle,
      province: form.province,
      commune: form.commune,
      quartier: form.quartier,
      avenue: form.avenue,
      numero: form.numero,
      user_id: "1",
    };
    const { data, status } = await post("api/createAgence", formData);
    if (status === 200) {
      return data;
    } else {
      return false;
    }
  },

  /**
   * Get all Organization agencies
   * @param commit vuex mutator
   * @returns Promise<void>
   * */
  async allAgences({ commit }) {
    const { data } = await get("api/agences");
    commit("SET_AGENCES", data);
  },

  async uploadAll(context, datas) {
    let formData = new FormData();
    datas.forEach((e) => {
      formData.append("device_id", e);
    });
    const { data } = await post("api/uploadAll", formData);
    console.log(JSON.stringify(data));
    if (data.response !== undefined) {
      return data;
    }
    return false;
  },
};

export default {
  namespaced: true,
  state: states,
  mutations: setters,
  getters: getters,
  actions: actions,
};
