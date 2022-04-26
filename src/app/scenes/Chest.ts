import { Container } from "pixi.js"
import Game from "../Game"

export default class Chest extends Container {
  constructor(public game: Game) {
    super()
  }
}
