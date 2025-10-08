import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import 'primeicons/primeicons.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import { router } from './router/index'

const app = createApp(App)
app.use(Toast).use(router).mount('#app')
