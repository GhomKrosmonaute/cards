import { Container, Sprite } from "pixi.js"

import Game from "../Game"

export enum RelicEffect {
  CardChoice_MoreSize,
}

export interface RelicOptions {
  name: string
  description: string
  cost: number
  body: Sprite[]
  effects: RelicEffect[]
  activeFilter?: boolean | ((relic: Relic) => boolean)
  onTurnStart?: (relic: Relic) => unknown
  onTurnStop?: (relic: Relic) => unknown
  onBuy?: (relic: Relic) => unknown
}

export default class Relic extends Container {
  constructor(
    public game: Game,
    public levels: RelicOptions[],
    public level = 0
  ) {
    super()
  }

  get options(): RelicOptions {
    return this.levels[this.level]
  }
}
