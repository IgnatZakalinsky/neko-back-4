import cors from 'cors'
import {Express} from 'express'
import {IS_DEVELOPER_VERSION} from '../i0-config/config'

export const checkCors = (app: Express) => {

    const whitelist = [
        'http://localhost:3000',
        'http://localhost:3001',
        'http://localhost:3002',
        // 'http://example2.com',
    ]
    const corsOptions = {
        origin: (
            origin: string | undefined,
            callback: (err: Error | null, allow?: boolean) => void
        ) => {
            if (IS_DEVELOPER_VERSION) {
                console.log('-----------------------------------------------------------------------------')
                console.log('origin: ', origin)
            }

            if(whitelist.includes(origin || ''))
                return callback(null, true)

            callback(new Error('Not allowed by CORS'))

            // callback(null, true) // everyone is allowed
        }
    }
    app.use(cors(corsOptions))
}
