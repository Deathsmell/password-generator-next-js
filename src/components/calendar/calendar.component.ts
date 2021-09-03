import { defineComponent } from 'vue'
import Day from '../day/day.component.vue'
import { DayModel } from '@/model/day.model'
import { CommonUtils } from '@/util/common.utils'
import { DayEventModel } from '@/model/day-event.model'

const dayEvents: {[k in number]: DayEventModel[]} = {
  14: [new DayEventModel({ name: 'holiday', owner: 'alex' })],
}

export default defineComponent({
  name: 'Calendar',
  components: { Day },
  data () {
    return {
      days: this.createDays(),
      loaded: true,
    }
  },
  computed: {
    mountName (): string {
      return this.$moment().format('MMMM')
    },
  },
  created () {
    this.fetchEvents()
  },
  methods: {
    createDays (): { [k in string]: DayModel } {
      const daysWithKey = CommonUtils.generate(1, this.$moment().daysInMonth())
        .map((dateNumber: number) => new DayModel({ date: this.$moment().date(dateNumber) }))
        .map((day: DayModel) => [day.getDayNumber(), day])
      return Object.fromEntries(daysWithKey)
    },

    async fetchEvents (): Promise<{ [k in string]: DayModel }> {
      return new Promise(resolve => {
        setTimeout(() => {
          const newDays = Object.entries<DayModel>(this.days)
            .map(([key, day]) => {
              const events = dayEvents[Number(key)]
              return [key, events ? day.setEvents(events) : day]
            })
          this.days = Object.fromEntries(newDays)
          this.loaded = false
          resolve(this.days)
        }, 1000)
      })
    },
  },
})
