import { Model } from '@/type/model.type'

export interface DayEventInitializer {
  name: string,
  owner: string,
}

export class DayEventModel implements Model<DayEventInitializer> {
  name: string
  owner: string

  constructor (initializer: DayEventInitializer) {
    this.name = initializer.name
    this.owner = initializer.owner
  }
}
