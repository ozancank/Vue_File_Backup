import axios from 'axios';
import Vue from 'vue';
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
    },
    removeFile(state, payload) {
        const file = state.files.findIndex(file => file._id == payload);
        Vue.delete(state.files, file);
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
    },
    deleteFile(vuexContext, payload) {
        axios
            .delete(FILE_API + '/delete', {
                headers: { id: payload.id, path: payload.path }
            })
            .then(response => {
                vuexContext.commit('removeFile', payload.id);
                Vue.notify({
                    group: 'when-deleted',
                    title: response.data.message,
                    text: response.data.subtitle
                });
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
