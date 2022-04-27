import { Container } from "pixi.js"

import Potion from "../items/Potion"
import Relic from "../items/Relic"
import Card from "../items/Card"

import Game from "../Game"

import Div from "../utils/Div"
import Scene from "../utils/Scene"

export default class Inventory extends Scene {
  public potions = new Div<Potion>(this)
  public relics = new Div<Relic>(this)
  public cards = new Div<Card>(this)

  constructor(game: Game) {
    super(game, {
      name: "Inventory",
      title: {
        en: "Inventory",
        fr: "Inventaire",
      },
    })
  }
}
