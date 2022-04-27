import { Container } from "pixi.js"
import Card from "../items/Card"
import Scene from "../utils/Scene"
import Div from "../utils/Div"
import Game from "../Game"

export type FightType = "normal" | "boss" | "elite"

export default class Fight extends Scene {
  public discardCards = new Div<Card>(this)
  public drawCards = new Div<Card>(this)
  public handCards = new Div<Card>(this)

  constructor(game: Game, public type: FightType = "normal") {
    super(game, {
      name: "Fight",
      title: {
        en: "Fight",
        fr: "Combat",
      },
    })

    game.addChild(this)

    this.generate()
  }

  discard(card: Card) {
    this.drawCards.remove(card)
    this.handCards.remove(card)
    this.discardCards.add(card)
  }

  distribute() {
    this.drawCards.add(this.game.inventory.cards.children)
  }

  generate() {
    super.generate()
    this.distribute()
  }
}
