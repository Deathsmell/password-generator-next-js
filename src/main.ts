import { createApp } from 'vue'
import App from './app.vue'
import './registerServiceWorker'
import moment from 'moment'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $style: { [k in string]: string };
    $moment: typeof moment,
  }
}

const app = createApp(App)
app.config.globalProperties.$moment = moment

app.mount('#app')
