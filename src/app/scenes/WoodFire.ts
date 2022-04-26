import { Container } from "pixi.js"
import Game from "../Game"

export default class WoodFire extends Container {
  constructor(public game: Game) {
    super()
  }
}
