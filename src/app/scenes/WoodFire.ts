import { Container } from "pixi.js"
import Game from "../Game"
import Scene from "../utils/Scene"

export default class WoodFire extends Scene {
  constructor(game: Game) {
    super(game, {
      name: "WoodFire",
      title: {
        en: "Wood fire",
        fr: "Feu de bois",
      },
    })
  }

  generate() {
    super.generate()
  }
}
