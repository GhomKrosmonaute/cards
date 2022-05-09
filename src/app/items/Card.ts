import { Container, Graphics, Sprite } from "pixi.js"

import Game from "../Game"

import Player from "../fight/Player"
import Enemy from "../fight/Enemy"

export type CardTarget = Enemy | Player

export interface CardOptions {
  name: string
  description: string
  cost: number
  body: Sprite[]
  shopPrice: number
  targetFilter?: (card: Card, target: CardTarget) => boolean
  usableFilter?: boolean | ((card: Card) => boolean)
  onTurnStart?: (card: Card) => unknown
  onTurnStop?: (card: Card) => unknown
  onUsage?: (card: Card) => unknown
}

export const CARD_WIDTH = 100
export const CARD_HEIGHT = 150

export default class Card extends Container {
  constructor(
    public game: Game,
    public options: CardOptions[],
    public level = 0
  ) {
    super()

    this.generate()
  }

  generate() {
    const bg = new Graphics()
      .beginFill(0xffffff)
      .drawRect(CARD_WIDTH / 2, CARD_HEIGHT / 2, CARD_WIDTH, CARD_HEIGHT)
      .endFill()

    this.addChild(bg)
  }

  discard() {
    this.game.fight?.discard(this)
  }
}
