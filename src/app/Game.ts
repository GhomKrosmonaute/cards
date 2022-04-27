import { Container } from "pixi.js"
import { app } from "../core"

import Inventory from "./scenes/Inventory"
import GameMap from "./scenes/GameMap"
import Choice from "./scenes/Choice"
import Fight from "./scenes/Fight"
import Shop from "./scenes/Shop"

import Potion from "./items/Potion"
import Relic from "./items/Relic"
import Card from "./items/Card"

import Div from "./utils/Div"
import CardChoice from "./scenes/CardChoice"
import WoodFire from "./scenes/WoodFire"
import Chest from "./scenes/Chest"

export default class Game extends Container {
  public cards = new Div<Card>(this)
  public relics = new Div<Relic>(this)
  public potions = new Div<Potion>(this)
  public inventory = new Inventory(this)

  public cardChoice?: CardChoice
  public woodFire?: WoodFire
  public gameMap?: GameMap
  public choice?: Choice
  public fight?: Fight
  public chest?: Chest
  public shop?: Shop

  public level = 0
  public lang = document.documentElement.lang

  constructor() {
    super()

    app.stage.addChild(this)
  }

  testFight() {
    this.fight = new Fight(this)
  }

  startScene(scene: Container) {}
}
