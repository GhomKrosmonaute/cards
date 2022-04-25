import { Container, Sprite } from "pixi.js"

import Game from "../Game"

export type PotionEffectCallback<ReturnType = unknown> = (
  potion: Potion
) => ReturnType

export interface PotionOptions {
  name: string
  description: string
  cost: number
  body: Sprite[]
  usableFilter?: boolean | PotionEffectCallback<boolean>
  onTurnStart?: PotionEffectCallback
  onTurnStop?: PotionEffectCallback
  onUsage?: PotionEffectCallback
}

export default class Potion extends Container {
  constructor(
    public game: Game,
    public options: PotionOptions[],
    public level = 0
  ) {
    super()
  }
}
