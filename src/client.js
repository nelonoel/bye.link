import * as sapper from '@sapper/app'
import 'focus-visible'
import user from 'stores/user'
user.initialize()

sapper.start({
  target: document.body,
})
