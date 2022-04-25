import Game from "./Game"

let game: Game

/**
 * After resources is loaded, setup your Game
 */
export async function setup() {
  game = new Game()
}

/**
 * Called for each Game tick
 */
export async function update() {}
