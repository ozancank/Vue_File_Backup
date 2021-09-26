import Vue from 'vue';
import Router from 'vue-router';
import { checkMobile } from './utils';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: () => import('@/components/Files'),
            name: 'files'
        },
        {
            path: '/add',
            component: () => import('@/components/Add'),
            name: 'add'
        },
        {
            path: '/folders',
            component: () => import('@/components/mobile/Folders'),
            name: 'folders',
            beforeEnter: checkMobile
        },
        {
            path: '/folder/:folderName',
            component: () => import('@/components/Folder'),
            name: 'folder'
        }
    ],
    mode: 'history'
});
