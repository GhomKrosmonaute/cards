import { Fighter } from "./Fighter"
import Game from "../Game"
import Hook from "../utils/Hook"

export default class Player extends Fighter {
  hp = new Hook(0)
  maxHp = new Hook(0)

  constructor(public game: Game) {
    super()

    this.hp.sync(game.hp, true)
    this.maxHp.sync(game.maxHp, true)
  }
}
