import { BaseEventNames, EventEmitter } from "@ghom/event-emitter"

export interface HookEventNames<ValueType> extends BaseEventNames {
  automaticChange: [oldValue: ValueType, newValue: ValueType]
  manualChange: [oldValue: ValueType, newValue: ValueType]
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

      this.emit("manualChange", oldValue, newValue).catch(console.error)
      this.emit("change", oldValue, newValue).catch(console.error)
    }
  }

  get value() {
    return this._value
  }

  sync(hook: Hook<ValueType>, loadFromTarget?: boolean): ValueType {
    if (loadFromTarget) this._value = hook._value
    else hook._value = this._value

    hook.on("manualChange", (oldValue, newValue) => {
      this._value = newValue
      this.emit("change", oldValue, newValue).catch(console.error)
      this.emit("automaticChange", oldValue, newValue).catch(console.error)
    })

    this.on("change", (oldValue, newValue) => {
      hook._value = newValue
      hook.emit("change", oldValue, newValue).catch(console.error)
      hook.emit("automaticChange", oldValue, newValue).catch(console.error)
    })

    return this._value
  }

  destroy() {
    this.off()
  }
}
