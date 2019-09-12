const EventEmitter = require('events')

const defaultState = {
  drive: {
    linearVelocity: 0,
    angularVelocity: 0,
    timeoutId: null,
    degree: 0
  },
  arms: {
    left: {
      position: 0
    },
    right: {
      position: 0
    }
  }
}

/**
 *
 *
 *
 *
 *
 *
 *  SPACE
 *
 *
 *
 */
const onChange = (object, onChange) => {
  const handler = {
    get(target, property, receiver) {
      try {
        return new Proxy(target[property], handler)
      } catch (err) {
        return Reflect.get(target, property, receiver)
      }
    },
    set: function(target, prop, value) {
      target[prop] = value
      onChange()
      return
    },
    defineProperty(target, property, descriptor) {
      onChange()
      return Reflect.defineProperty(target, property, descriptor)
    },
    deleteProperty(target, property) {
      onChange()
      return Reflect.deleteProperty(target, property)
    }
  }

  return new Proxy(object, handler)
}

const emitter = new EventEmitter()
let state
state = onChange(
  {
    ...defaultState,
    on: emitter.on.bind(emitter)
  },
  () => emitter.emit('change', state)
)
module.exports = {
  state,
  defaultState
}
