import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Day',
  props: {
    day: {
      type: Number,
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
      return this.day === this.$moment.date()
    },

    events () {
      return []
    },
  },
})
