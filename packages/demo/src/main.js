import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';

import App from './app';
import router from './router';
import addPlugin from './plugins';

const app = createApp(App);

const pinia = createPinia();
pinia.use((context = {}) => {
  const { store } = context;
  store.$router = markRaw(router);
});

app.use(pinia);
app.use(router);

addPlugin(app).then(() => {
  const mountPoint = document.getElementById('app');
  app.mount(mountPoint);
});

