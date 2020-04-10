import * as sapper from '@sapper/app'
import blockstack from '../static/vendor/blockstack.js'
import 'focus-visible'

window.$ = blockstack

sapper.start({
	target: document.body,
})
