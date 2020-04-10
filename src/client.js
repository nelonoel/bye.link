import * as sapper from '@sapper/app'
import 'focus-visible'
window.$ = window.blockstack

sapper.start({
	target: document.body,
})
