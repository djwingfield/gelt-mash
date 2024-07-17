import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import FontAwesomeIcon from './plugins/font-awesome';
import './style.css';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.component('fa-icon', FontAwesomeIcon);

app.mount('#app');
