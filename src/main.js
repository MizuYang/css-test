import { createApp } from 'vue'
import router from './router'

import { createPinia } from 'pinia'

import 'bootstrap'

import App from './App.vue'

// Vuetify
import { vuetify } from '@/modules/vuetify.js'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(vuetify)

app.mount('#app')
