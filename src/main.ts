import { createApp } from 'vue'
import App from './app.vue'
import './registerServiceWorker'
import store from './store'
import moment, { Moment } from 'moment'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $style: { [k in string]: string };
    $moment: Moment,
  }
}

const app = createApp(App)
app.config.globalProperties.$moment = moment()

app.use(store).mount('#app')
