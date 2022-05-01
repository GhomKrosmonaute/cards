import { Container } from "pixi.js"
import Hook from "../utils/Hook"

export interface FighterOptions {
  hp: number
  maxHp: number
}

export abstract class Fighter extends Container {
  hp: Hook<number>
  maxHp: Hook<number>

  protected constructor(public options: FighterOptions) {
    super()

    this.hp = new Hook(options.hp)
    this.maxHp = new Hook(options.maxHp)
  }
}
