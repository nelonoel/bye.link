import { writable } from 'svelte/store'

const defaults = {}

export default (() => {
  const { subscribe, set, update } = writable(defaults)

  return {
    subscribe,
    initialize: () => {
      return set(new $.UserSession())
    },
    reset: () => {
      // Clear stuff
      return set(new $.UserSession())
    },
  }
})()
