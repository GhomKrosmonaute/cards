import { Container, IPointData } from "pixi.js"
import { nearly } from "../utils/math"
import { getHeight, getWidth } from "../../core"

import CardChoice from "./CardChoice"
import WoodFire from "./WoodFire"
import Choice from "./Choice"
import Chest from "./Chest"
import Fight from "./Fight"
import Shop from "./Shop"

import Game from "../Game"

import Scene from "../utils/Scene"

const MAX_COL_COUNT = 5

export function getLineCount(level: number) {
  return [6, 8, 10, 15][level] ?? 15
}

export function getColumnCount() {
  return Math.floor(
    Math.floor(MAX_COL_COUNT / 0.3) +
      Math.random() * Math.ceil(MAX_COL_COUNT / 0.7)
  )
}

export function getNextPointCount() {
  return 1 + Math.floor(Math.random() * 2)
}

export interface GameMapPoint {
  sceneName: GameMapSceneName
  visited: boolean
  nextPoints: GameMapPoint[]
  position: IPointData
}

export type GameMapSceneName =
  | "Choice"
  | "Fight"
  | "Chest"
  | "CardChoice"
  | "Shop"
  | "WoodFire"
  | "Elite"

export default class GameMap extends Scene {
  public points: GameMapPoint[][] = []

  constructor(game: Game) {
    super(game, {
      name: "GameMap",
      title: {
        en: "Map",
        fr: "Carte",
      },
    })

    game.addChild(this)

    this.generate()
  }

  getRandomSceneName(): GameMapSceneName {
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

  generate() {
    super.generate()

    const lineCount = getLineCount(this.game.level)

    for (let lineIndex = 0; lineIndex < lineCount; lineIndex++) {
      const line: GameMapPoint[] = []
      const colCount = getColumnCount()

      for (let i = 0; i < colCount; i++) {
        line.push({
          nextPoints: [],
          visited: false,
          sceneName: this.getRandomSceneName(),
          position: {
            x: nearly(
              i * (getWidth() / colCount) + getWidth() / colCount / 2,
              getWidth() / (colCount * 3)
            ),
            y: nearly(
              lineIndex * (getHeight() / lineCount) +
                getHeight() / lineCount / 2,
              getHeight() / (lineCount * 3)
            ),
          },
        })
      }

      this.points.push(line)
    }
  }
}
