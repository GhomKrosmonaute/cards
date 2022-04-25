import { Container } from "pixi.js"
import Game from "../Game"

export default class GameMap extends Container {
  constructor(public game: Game) {
    super()

    game.addChild(this)

    this.generate()
  }

  generate() {}
}
