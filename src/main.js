import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store/index'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)

//註冊boostrap vue3套件
app.use(BootstrapVue3)
//註冊儲存庫
app.use(store)
//註冊路由
app.use(router)
//綁定index.html id 為 app 之物件
app.mount('#app')

