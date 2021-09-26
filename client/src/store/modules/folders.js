const state = {};
const getters = {};
const mutations = {};
const actions = {
    createFolder(vuexContext, payload) {
        console.log(payload);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
