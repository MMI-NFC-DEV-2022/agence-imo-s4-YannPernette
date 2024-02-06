import './assets/main.css'
import { plugin, defaultConfig } from "@formkit/vue";

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'

const app = createApp(App)

app.use(
  createRouter({
    history: createWebHistory()
  })
)

app.use(plugin, defaultConfig);

app.mount('#app')
