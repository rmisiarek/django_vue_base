import {
  DASHBOARD_STATS_NEW_AND_OLD_LOAD,
  DASHBOARD_STATS_EISENHOWER_MATRIX_LOAD,
  DASHBOARD_STATS_STATUS_LIST_LOAD,
} from '../actions/dashboard.js';
import apiCall from '../../utils/api';
import Vue from 'vue';


const state = {

}


const getters = {

}


const actions = {
  [DASHBOARD_STATS_NEW_AND_OLD_LOAD]: ({commit, dispatch}, userId) => {
    return new Promise((resolve, reject) => {
      apiCall.get(`/api/tasks/stats/new-and-old/${userId}/`)
      .then(resp => {
        resolve(resp);
      })
      .catch(err => {
        reject(err);
      })
    })
  },

  [DASHBOARD_STATS_EISENHOWER_MATRIX_LOAD]: ({commit, dispatch}, userId) => {
    return new Promise((resolve, reject) => {
      apiCall.get(`/api/tasks/stats/eisenhower-matrix/${userId}/`)
      .then(resp => {
        resolve(resp);
      })
      .catch(err => {
        reject(err);
      })
    })
  },

  [DASHBOARD_STATS_STATUS_LIST_LOAD]: ({commit, dispatch}, userId) => {
    return new Promise((resolve, reject) => {
      apiCall.get(`/api/tasks/stats/statuses/${userId}/`)
      .then(resp => {
        resolve(resp);
      })
      .catch(err => {
        reject(err);
      })
    })
  },
}

const mutations = {

}


export default {
  state,
  getters,
  actions,
  mutations,
}
