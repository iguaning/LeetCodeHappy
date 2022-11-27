import { createApp } from 'vue'
import App from './App.vue'

import './index.css'

import { createPinia } from 'pinia'

import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import moment from 'moment'

import { GlobalCmComponent } from 'codemirror-editor-vue3'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.use(moment)
app.use(GlobalCmComponent)
app.mount('#app')
