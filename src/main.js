import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import 'primeicons/primeicons.css'

import { router } from './router/index'

const app = createApp(App)
app.use(router).mount('#app')
