import { Container } from "pixi.js"
import Game from "../Game"

export interface ChoiceItem {
  text: string
  effect: (game: Game) => unknown
}

export default class Choice extends Container {
  constructor(public game: Game, public choices: ChoiceItem[]) {
    super()

    game.addChild(this)

    this.generate()
  }

  generate() {
    // write all buttons and listen clicks (pixi)
  }
}
