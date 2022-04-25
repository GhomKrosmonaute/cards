import { Container } from "pixi.js"

export default class Div<Type extends Container> {
  private container = new Container()

  constructor(public parent: Container, public size?: number) {
    parent.addChild(this.container)
  }

  get isFull(): boolean {
    return this.size === undefined || this.children.length >= this.size
  }

  get children(): Type[] {
    return this.container.children as Type[]
  }

  add(child: Type[] | Type, at?: number) {
    if (this.isFull) throw new Error("This Div is already full")

    if (Array.isArray(child)) {
      if (at !== undefined)
        child.forEach((item) => {
          this.container.addChildAt(item, at)
        })
      else this.container.addChild(...child)
    } else {
      if (at !== undefined) {
        this.container.addChildAt(child, at)
      } else {
        this.container.addChild(child)
      }
    }
  }

  remove(child: Type) {
    this.container.removeChild(child)
  }

  has(child: Type | ((child: Type) => boolean)): boolean {
    return typeof child === "function"
      ? this.children.some((c) => child(c))
      : this.children.includes(child)
  }

  transfer(child: Type, div: Div<Type>) {
    div.add(child)
    this.remove(child)
  }

  random(): Type {
    return this.children[Math.floor(Math.random() * this.children.length)]
  }

  fill(cb: (div: Div<Type>) => Type) {
    while (!this.isFull) {
      this.add(cb(this))
    }
  }
}
