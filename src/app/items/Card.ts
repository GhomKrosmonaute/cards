import { Container, Sprite } from "pixi.js"

import Game from "../Game"

export interface CardOptions {
  name: string
  description: string
  cost: number
  body: Sprite[]
  shopPrice: number
  usableFilter?: boolean | ((card: Card) => boolean)
  onTurnStart?: (card: Card) => unknown
  onTurnStop?: (card: Card) => unknown
  onUsage?: (card: Card) => unknown
}

export default class Card extends Container {
  constructor(
    public game: Game,
    public options: CardOptions[],
    public level = 0
  ) {
    super()
  }

  discard() {
    this.game.fight?.discard(this)
  }
}
