import { createApp } from 'vue';
import App from './App.vue';

import getVueRouter from './router';

const app = createApp(App);
app.use(getVueRouter());
app.mount('#app');
