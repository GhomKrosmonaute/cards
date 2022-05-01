import { Fighter } from "./Fighter"
import Game from "../Game"

export default class Player extends Fighter {
  constructor(public game: Game) {
    super({
      hp: game.hp.value,
      maxHp: game.maxHp.value,
    })

    this.hp.syncWith(game.hp)
    this.maxHp.syncWith(game.maxHp)
  }
}
