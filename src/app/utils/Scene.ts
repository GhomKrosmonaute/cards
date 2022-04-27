import { Container } from "pixi.js"
import { title, translate, TranslatedText } from "./text"

import { GameMapSceneName } from "../scenes/GameMap"

import Game from "../Game"

export interface SceneOptions {
  name: SceneName
  title: TranslatedText
}

export type SceneName =
  | "Choice"
  | "Fight"
  | "Chest"
  | "CardChoice"
  | "Shop"
  | "WoodFire"
  | "GameMap"
  | "Inventory"

export default class Scene extends Container {
  constructor(public game: Game, public options: SceneOptions) {
    super()
  }

  generate() {
    this.addChild(title(translate(this.options.title, this)))
    // write all buttons and listen clicks (pixi)
  }

  destroy() {
    this.removeChildren()
    this.parent?.removeChild(this)
  }
}
