import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueVideoPlayer from '@videojs-player/vue'

createApp(App).use(router, VueVideoPlayer).mount('#app')
