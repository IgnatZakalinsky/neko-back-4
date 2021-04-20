import express from 'express'
import {globalCatch} from './i1-common/c0-errors/errors'
import {addMid} from './i2-main/mid'
import {PORT} from './i0-config/config'
import {useMongo} from './i2-main/mongo'
import {addRoutes} from './i2-main/routes'

const app = express()

addMid(app)
addRoutes(app)

useMongo(() => {
    app.listen(PORT, () => {
        console.log('neko-back-4 listening on port: ' + PORT)

        // throw new Error('test')
    })
})

globalCatch()
