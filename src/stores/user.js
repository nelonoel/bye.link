import { writable } from 'svelte/store'

export default (() => {
  const { subscribe, set, update } = writable(null)

  return {
    subscribe,
    initialize: () => {
      return set(new blockstack.UserSession())
    },
    reset: () => {
      // Clear stuff
      return set(new blockstack.UserSession())
    },
  }
})()
