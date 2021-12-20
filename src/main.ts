import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import filters from './helpers/filters'

import '@/assets/sass/app.scss'

const app = createApp(App).use(router);

app.config.globalProperties.$filters = filters
app.mount('#app')