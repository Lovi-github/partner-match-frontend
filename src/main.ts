import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// 全量引入
import Vant from 'vant'
import 'vant/lib/index.css'


const app = createApp(App);

app.use(createPinia())
app.use(router)
app.use(Vant)
app.mount('#app')

