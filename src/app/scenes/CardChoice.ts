import { Container } from "pixi.js"
import { RelicEffect } from "../items/Relic"
import Card from "../items/Card"
import Game from "../Game"

import Scene from "../utils/Scene"

export const DEFAULT_CHOICE_SIZE = 3

export default class CardChoice extends Scene {
  public cards: Card[] = []

  constructor(game: Game) {
    super(game, {
      name: "CardChoice",
      title: {
        en: "Card choice",
        fr: "Choix de carte",
      },
    })

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
    super.generate()
  }
}
