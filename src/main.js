import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Content from "./components/Content.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [{path: '/', name:"Legalizujme", component: Content}],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
    }
})

const clickOutside = {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = event => {
      // here I check that click was outside the el and his children
      if (!(el === event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        binding.value(el);
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted: el => {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
};


const app = createApp(App)
app.use(router)
app.directive("click-outside", clickOutside)
app.mount('#app')
