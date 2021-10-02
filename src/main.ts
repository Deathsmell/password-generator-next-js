import { createApp } from 'vue'
import App from './app.vue'
import './registerServiceWorker'
import moment from 'moment'
import globalAxios, { Axios } from 'axios'
import { EventControllerApi, UserControllerApi } from './open-api/generated/api'

type Api = {
  fetch: Axios,
  user: UserControllerApi,
  event: EventControllerApi,
}
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $style: { [k in string]: string };
    $moment: typeof moment,
    $api: Api
  }
}

const app = createApp(App)

app.config.globalProperties.$moment = moment
app.config.globalProperties.$api = {
  fetch: globalAxios,
  user: new UserControllerApi(),
  event: new EventControllerApi(),
} as Api

app.mount('#app')
