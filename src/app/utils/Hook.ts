import { BaseEventNames, EventEmitter } from "@ghom/event-emitter"

export interface HookEventNames<ValueType> extends BaseEventNames {
  change: [oldValue: ValueType, newValue: ValueType]
}

export default class Hook<ValueType> extends EventEmitter<
  HookEventNames<ValueType>
> {
  constructor(private _value: ValueType) {
    super()
  }

  set value(newValue: ValueType) {
    const oldValue = this._value

    if (newValue !== oldValue) {
      this._value = newValue

      this.emit("change", oldValue, newValue).catch(console.error)
    }
  }

  get value() {
    return this._value
  }

  syncWith(hook: Hook<ValueType>, load?: boolean): ValueType {
    if (load) this._value = hook._value
    else hook._value = this._value

    hook.on("change", (oldValue, newValue) => {
      this._value = newValue
    })

    this.on("change", (oldValue, newValue) => {
      hook._value = newValue
    })

    return this._value
  }

  destroy() {
    this.off()
  }
}
