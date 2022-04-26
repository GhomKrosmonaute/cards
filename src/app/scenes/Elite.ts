import { Container } from "pixi.js"
import Card from "../items/Card"
import Div from "../utils/Div"
import Game from "../Game"
import Fight from "./Fight"

export default class Elite extends Fight {
  public discardCards = new Div<Card>(this)
  public drawCards = new Div<Card>(this)
  public handCards = new Div<Card>(this)

  discard(card: Card) {
    this.drawCards.remove(card)
    this.handCards.remove(card)
    this.discardCards.add(card)
  }

  distribute() {
    this.drawCards.add(this.game.inventory.cards.children)
  }
}
