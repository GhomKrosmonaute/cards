import { Container } from "pixi.js"
import Card from "../items/Card"
import Div from "../utils/Div"
import Game from "../Game"

export interface FightOptions {
  onFinish: (fight: Fight) => unknown
}

export default class Fight extends Container {
  public discardCards = new Div<Card>(this)
  public drawCards = new Div<Card>(this)
  public handCards = new Div<Card>(this)

  constructor(public game: Game, public options: FightOptions) {
    super()

    game.addChild(this)

    this.distribute()
  }

  discard(card: Card) {
    this.drawCards.remove(card)
    this.handCards.remove(card)
    this.discardCards.add(card)
  }

  distribute() {
    this.drawCards.add(this.game.inventory.cards.children)
  }
}
