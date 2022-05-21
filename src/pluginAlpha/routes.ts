import { RouteRecordRaw } from 'vue-router';
// import PluginAlpha from './Alpha.vue';

export const routes: RouteRecordRaw[] = [
    {
        path: '/alpha',
        component: () => import('./Alpha.vue'),
        meta: {
            displayName: 'Alpha',
        },
    },
];