import { Container } from "pixi.js"
import { RelicEffect } from "../items/Relic"
import Card from "../items/Card"
import Game from "../Game"

export const DEFAULT_CHOICE_SIZE = 3

export default class CardChoice extends Container {
  public cards: Card[] = []

  constructor(public game: Game) {
    super()

    game.addChild(this)

    this.generate()
  }

  getChoiceSize() {
    let size = DEFAULT_CHOICE_SIZE

    this.game.inventory.relics.children.forEach((relic) => {
      if (relic.options.effects.includes(RelicEffect.CardChoice_MoreSize)) {
        size += relic.level
      }
    })

    return size
  }

  generate() {
    // write all buttons and listen clicks (pixi)
  }
}
