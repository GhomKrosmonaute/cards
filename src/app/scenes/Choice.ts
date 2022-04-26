import { Container } from "pixi.js"
import Game from "../Game"

export interface ChoiceItem {
  text: string
  effect: (game: Game) => unknown
}

export default class Choice extends Container {
  public choices: ChoiceItem[] = []

  constructor(public game: Game) {
    super()

    game.addChild(this)

    this.generate()
  }

  generate() {
    // write all buttons and listen clicks (pixi)
  }
}
