import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

// Bootstrap Vue app, register router plugin, mount to index.html (#app).
createApp(App).use(router).mount('#app')
