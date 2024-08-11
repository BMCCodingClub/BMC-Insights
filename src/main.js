import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import News from './News.vue'
import Blog from './Blog.vue'

createApp(App).mount("#app")
createApp(News).mount('#news')
createApp(Blog).mount('#blog')
