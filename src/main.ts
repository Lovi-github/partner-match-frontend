import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { Button } from 'vant'
import { NavBar } from 'vant'
import { Tabbar, TabbarItem } from 'vant';
import { Toast } from 'vant';

const app = createApp(App);

app.use(createPinia())
app.use(router)
app.use(Button)
app.use(NavBar)
app.use(Tabbar);
app.use(TabbarItem);
app.use(Toast);
app.mount('#app')

