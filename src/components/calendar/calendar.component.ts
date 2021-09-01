import { defineComponent } from 'vue'
import Day from './day/day.component.vue'

export default defineComponent({
  name: 'Calendar',
  components: { Day },
  computed: {
    days (): number {
      return this.$moment.daysInMonth()
    },

    mountName (): string {
      return this.$moment.format('MMMM')
    },
  },
})
