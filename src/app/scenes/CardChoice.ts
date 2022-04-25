import { Container } from "pixi.js"
import Game from "../Game"
import Card from "../items/Card"
import { RelicEffect } from "../items/Relic"

export const DEFAULT_CHOICE_SIZE = 3

export default class CardChoice extends Container {
  constructor(public game: Game, public cards: Card[]) {
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
