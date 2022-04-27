import { Container } from "pixi.js"
import Game from "../Game"
import Scene from "../utils/Scene"

export default class Chest extends Scene {
  constructor(game: Game) {
    super(game, {
      name: "Chest",
      title: {
        en: "Chest",
        fr: "Coffre",
      },
    })

    this.generate()
  }

  generate() {
    super.generate()
  }
}
