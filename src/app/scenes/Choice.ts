import { Container } from "pixi.js"
import Game from "../Game"
import Scene from "../utils/Scene"

export interface ChoiceItem {
  text: string
  effect: (game: Game) => unknown
}

export default class Choice extends Scene {
  public choices: ChoiceItem[] = []

  constructor(public game: Game) {
    super(game, {
      name: "Choice",
      title: {
        en: "Make a choice",
        fr: "Faites un choix",
      },
    })

    game.addChild(this)

    this.generate()
  }

  generate() {
    super.generate()
    // write all buttons and listen clicks (pixi)
  }
}
