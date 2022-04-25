import { Container } from "pixi.js"
import Potion from "../items/Potion"
import Relic from "../items/Relic"
import Card from "../items/Card"
import Div from "../utils/Div"
import Game from "../Game"

export default class Shop extends Container {
  public cards = new Div<Card>(this, 6)
  public potions = new Div<Potion>(this, 6)
  public relics = new Div<Relic>(this, 6)

  constructor(public game: Game) {
    super()

    game.addChild(this)

    this.generate()
  }

  generate() {
    this.cards.fill(() => this.game.cards.random())
    this.potions.fill(() => this.game.potions.random())
    this.relics.fill(() => this.game.relics.random())
  }
}
