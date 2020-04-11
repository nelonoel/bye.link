import { writable } from 'svelte/store'

const slugs = ['user', 'asset', 'item', 'action']

export default (() => {
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
        // Retain previous slugs
        ...slugs.slice(0, i).reduce((acc, key) => {
          acc[key] = slug[key]
          return acc
        }, {}),
        // Set path
        [key]: val,
        // Nullify subpaths
        ...slugs.slice(i + 1).reduce((acc, key) => {
          acc[key] = null
          return acc
        }, {}),
      }))
    },
  }
})()
