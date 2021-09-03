import { defineComponent } from 'vue'
import { DayModel } from '@/model/day.model'
import DayEventComponent from '../dayEvent/day-event.component.vue'

export default defineComponent({
  name: 'Day',
  components: {
    DayEventComponent,
  },
  props: {
    day: {
      type: DayModel,
      require: true,
    },
  },
  computed: {
    dayContainerClasses () {
      return [
        this.$style.container,
        { [this.$style.today]: this.isToday },
      ]
    },

    isToday (): boolean {
      return this.$moment().date() === this.day?.getDayNumber()
    },
  },
})
