import { createApp } from 'vue'
import App from './App.vue'
import FlipDisplayer from './components/FlipDisplayer'
import dayjs from 'dayjs'
import { formatDuration } from './utils/timeUtil'
import './style.css'

const app = createApp(App)
app.config.globalProperties.$dayjs = dayjs
app.config.globalProperties.$duration = formatDuration
app.component('FlipDisplayer', FlipDisplayer)
app.mount('#app')
