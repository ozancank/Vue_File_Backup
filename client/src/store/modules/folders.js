import Vue from 'vue';
import axios from 'axios';
import { FOLDER_API } from '../http-config';

const state = { folders: [] };
const getters = { folders: state => state.folders };
const mutations = {
    setFolders(state, payload) {
        state.folders = payload;
    },
    addFolder(state, payload) {
        state.folders.push(payload);
    }
};
const actions = {
    createFolder(vuexContext, payload) {
        axios.post(FOLDER_API, { folderName: payload }).then(response => {
            if (response.status === 200) {
                vuexContext.commit('addFolder', payload);
                Vue.notify({
                    group: 'when-added',
                    title: `Your Folder Added Success - ${payload}`,
                    text: response.data.path
                });
            } else {
                Vue.notify({
                    group: 'when-added',
                    title: `${response.data.message} - ${payload}`,
                    text: response.data.path
                });
            }
        });
    },
    getFolders(vuexContext) {
        axios.get(FOLDER_API).then(response => {
            vuexContext.commit('setFolders', response.data);
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
