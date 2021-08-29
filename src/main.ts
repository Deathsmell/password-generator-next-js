import { createApp } from 'vue'
import App from './app.vue'
import './registerServiceWorker'
import store from './store'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $style: { [k in string]: string };
  }
}

const app = createApp(App)

app.use(store).mount('#app')
