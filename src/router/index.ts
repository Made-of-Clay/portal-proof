import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from '../components/Home.vue';
import About from '../components/About.vue';

const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            displayName: 'Home',
        },
    },
    {
        path: '/about',
        component: About,
        meta: {
            displayName: 'About',
        },
    },
];


export default (additionalRoutes: RouteRecordRaw[]) => {
    const router = createRouter({
        history: createWebHashHistory(),
        routes: [...routes, ...additionalRoutes],
    });
    return router;
}