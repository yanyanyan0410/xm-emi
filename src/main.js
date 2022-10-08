import { createApp } from 'vue'
import router from './router'
import store from './store/index'
import App from './App.vue'
import BaseButton from "@/components/ui/BaseButton";
import BaseCard from "@/components/ui/BaseCard"
//import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
const app = createApp(App)

app.use(router)
app.use(store)
//app.use(ElementUI)

app.component('base-button',BaseButton)
app.component('base-card',BaseCard)
app.mount('#app')
