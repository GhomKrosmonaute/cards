import { Container } from "pixi.js"
import Hook from "../utils/Hook"

export abstract class Fighter extends Container {
  abstract hp: Hook<number>
  abstract maxHp: Hook<number>
}
