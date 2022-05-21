import { createRouter, createWebHashHistory } from "vue-router";
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


export default () => {
    const router = createRouter({
        history: createWebHashHistory(),
        routes,
    });
    return router;
}