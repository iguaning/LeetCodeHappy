import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import './index.css'

import { createPinia } from 'pinia'

import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
