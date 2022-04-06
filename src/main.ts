import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'

import "@unocss/reset/tailwind.css"
import './style/main.css'
import 'uno.css'

createApp(App).use(
    createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes
    })
).mount('#app')
