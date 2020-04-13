import { writable } from 'svelte/store'

export const list = (() => {
  const { subscribe, set, update } = writable(false)

  return {
    subscribe,
    show: () => {
      update(() => true)
    },
    hide: () => {
      update(() => false)
    },
    toggle: () => {
      update(v => !v)
    },
  }
})()
