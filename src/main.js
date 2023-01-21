import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Content from "./components/Content.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [{path: '/', name:"EPM 2024", component: Content}],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
    }
})


const app = createApp(App)
app.use(router)
app.mount('#app')
