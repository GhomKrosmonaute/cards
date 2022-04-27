import { Text } from "pixi.js"
import Game from "../Game"

export function title(text: string): Text
export function title(text: TranslatedText, ctx: { game: Game }): Text
export function title(
  text: string | TranslatedText,
  ctx?: { game: Game }
): Text {
  return new Text(
    typeof text === "string" ? text : translate(text, ctx?.game as any),
    {
      fontSize: 50,
      fill: 0xffffff,
    }
  )
}

export function translate(text: TranslatedText, ctx: { game: Game }): string {
  return text[ctx.game.lang] ?? text.en
}

export type TranslatedText = { en: string } & { [k: string]: string }
