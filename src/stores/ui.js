import { writable } from 'svelte/store'

export const filter = (() => {
  const { subscribe, set } = writable('')

  return {
    subscribe,
    set,
    clear: () => set(''),
  }
})()

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

export const path = (() => {
  const slugs = ['user', 'asset', 'item', 'action']
  const { subscribe, set, update } = writable({
    ...slugs.reduce((acc, key) => {
      acc[key] = null
      return acc
    }, {}),
  })

  return {
    subscribe,
    setSlug: (key, val) => {
      const i = slugs.indexOf(key)

      update(slug => ({
        ...slugs.slice(0, i).reduce((acc, key) => {
          acc[key] = slug[key]
          return acc
        }, {}),
        [key]: val,
        ...slugs.slice(i + 1).reduce((acc, key) => {
          acc[key] = null
          return acc
        }, {}),
      }))
    },
  }
})()
