import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import 'primeicons/primeicons.css'

import { router } from './router/index'

createApp(App).use(router).mount('#app')
