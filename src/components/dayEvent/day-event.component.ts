import { defineComponent } from 'vue'
import { DayEventModel } from '@/model/day-event.model'

export default defineComponent({
  name: 'DayEvent',
  props: {
    dayEvent: {
      type: DayEventModel,
      require: true,
    },
  },
})
