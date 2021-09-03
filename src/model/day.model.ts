import { DayEventModel } from '@/model/day-event.model'
import { Model } from '@/type/model.type'
import { Moment } from 'moment'

export interface DayInitializer {
  date: Moment,
  events?: DayEventModel[],
}

export class DayModel implements Model<DayInitializer> {
  readonly date: Moment
  readonly events: DayEventModel[]

  constructor (initializer: DayInitializer) {
    this.date = initializer.date
    this.events = initializer.events || []
  }

  getDayNumber (): number {
    return this.date.date()
  }

  hasEvents (): boolean {
    return !!this.events.length
  }

  setEvents (events: DayEventModel[]): DayModel {
    return new DayModel({
      date: this.date,
      events,
    })
  }

  getEvents (): DayEventModel[] {
    return this.events
  }
}
