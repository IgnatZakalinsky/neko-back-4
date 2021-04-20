import {Express, NextFunction, Request, Response} from 'express'
import bodyParser from 'body-parser'
import {checkCors} from './checkCors'
import {IS_DEVELOPER_VERSION} from '../i0-config/config'

export const addMid = (app: Express) => {
    checkCors(app)

    // parse application/json
    app.use(bodyParser.json({limit: '7mb'}))
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({limit: '7mb', extended: false}))

    // log middleware
    app.use((req: Request, res: Response, next: NextFunction) => {
        if (IS_DEVELOPER_VERSION) {
            console.log('-----------------------------------------------------------------------------')
            console.log('Time: ', new Date().toString())
            console.log('-----', req.method, req.url)
            console.log('query:', req.query)
            console.log('body:', req.body)
            // console.log('cookies:', req.cookies)
            // log('headers:', req.headers)
            // log('rawHeaders:', req.rawHeaders)
        }
        next()
    })
}
