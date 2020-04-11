import sirv from 'sirv'
import polka from 'polka'
import compression from 'compression'
import * as sapper from '@sapper/server'
// import { setup } from 'radiks-server'
import 'styles/bundle.css'

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

const server = polka()

// setup({
// 	mongoDBUrl: process.env.MONGODB_URI,
// }).then(radiks => {
// 	server.use('/api', radiks)
// })

server
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware()
  )
  .listen(PORT, err => {
    if (err) console.log('error', err)
  })

export default server
