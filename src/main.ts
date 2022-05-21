import { createApp } from 'vue';
import App from './App.vue';
import registerPortalPlugins from './registry';
import getVueRouter from './router';

// TODO test this value being filled by JSON or something runtime
const pluginIds = [
    'PluginAlpha',
];

registerPortalPlugins(pluginIds).then(portalPluginRoutes => {
    console.log({portalPluginRoutes})
    const app = createApp(App);
    app.use(getVueRouter(portalPluginRoutes));
    app.mount('#app');
})

