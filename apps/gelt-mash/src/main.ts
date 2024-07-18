import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import FaIcon from './plugins/FaIcon.ce.vue';
import './style.css';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.component('fa-icon', FaIcon);

app.mount('#app');
