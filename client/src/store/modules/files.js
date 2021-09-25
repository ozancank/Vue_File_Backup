import axios from 'axios';
const { FILE_API } = require('../http-config');

const state = {
    files: [],
    fileCounts: []
};
const getters = {
    files: state => state.files,
    fileCounts: state => state.fileCounts
};
const mutations = {
    setFiles(state, payload) {
        state.files = payload;
    },
    setFileCounts(state, payload) {
        state.fileCounts = payload;
    }
};
const actions = {
    getFiles(vuexContext) {
        axios.get(FILE_API).then(response => {
            vuexContext.commit('setFiles', response.data.files);
        });
    },
    getFileCounts(vuexContext) {
        axios.get(FILE_API + '/file-count').then(response => {
            vuexContext.commit('setFileCounts', response.data);
        });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
