import { Container } from "pixi.js"

import CardChoice from "./CardChoice"
import WoodFire from "./WoodFire"
import Choice from "./Choice"
import Chest from "./Chest"
import Fight from "./Fight"
import Shop from "./Shop"

import Game from "../Game"

// algo de génération de map:
// lignes de points (2~5 points par ligne),
// relier les plus proches en partant des trois points les plus bas,
// chaque point peut faire 1~2 liaisons.

const MAX_COL_COUNT = 5

export function getLineCount(level: number) {
  return [6, 8, 10, 15][level] ?? 15
}

export function getColumnCount() {
  // todo: use MAX_COL_COUNT
  return 2 + Math.floor(Math.random() * 3)
}

export function getNextPointCount() {
  return 1 + Math.floor(Math.random() * 2)
}

export interface GameMapPoint {
  scene: SceneName
  nextPoints: GameMapPoint[]
}

export type SceneName =
  | "Choice"
  | "Fight"
  | "Chest"
  | "CardChoice"
  | "Shop"
  | "WoodFire"
  | "Elite"

export default class GameMap extends Container {
  public points: GameMapPoint[][] = []

  constructor(public game: Game) {
    super()

    game.addChild(this)

    this.generate()
  }

  generate() {
    const lineCount = getLineCount(this.game.level)

    for (let lineIndex = 0; lineIndex < lineCount; lineIndex++) {
      const line: GameMapPoint[] = []
      const colCount = getColumnCount()

      for (let i = 0; i < colCount; i++) {
        line.push({
          nextPoints: [],
          scene: this.getRandomScene(),
        })
      }

      this.points.push(line)
    }
  }

  getRandomScene(): SceneName {
    if (Math.random() < 0.1) {
      return "Chest"
    } else if (Math.random() < 0.1) {
      return "Elite"
    } else if (Math.random() < 0.3) {
      return Math.random() < 0.33333
        ? "Choice"
        : Math.random() < 0.5
        ? "Shop"
        : "WoodFire"
    } else {
      return "Fight"
    }
  }
}
