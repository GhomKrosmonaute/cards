import { Container } from "pixi.js"
import Potion from "../items/Potion"
import Relic from "../items/Relic"
import Card from "../items/Card"
import Div from "../utils/Div"
import Game from "../Game"
import Scene from "../utils/Scene"

export default class Shop extends Scene {
  public cards = new Div<Card>(this, 6)
  public potions = new Div<Potion>(this, 6)
  public relics = new Div<Relic>(this, 6)

  constructor(game: Game) {
    super(game, {
      name: "Shop",
      title: {
        en: "Shop",
        fr: "Boutique",
      },
    })

    this.generate()
  }

  generate() {
    super.generate()
    this.cards.fill(() => this.game.cards.random())
    this.potions.fill(() => this.game.potions.random())
    this.relics.fill(() => this.game.relics.random())
  }
}
