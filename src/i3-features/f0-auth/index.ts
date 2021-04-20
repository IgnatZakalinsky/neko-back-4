import express from 'express'
import {logIn} from './a1-controllers/logIn'
import {me} from './a1-controllers/me'
import {logout} from './a1-controllers/logout'

const auth = express.Router()

auth.post('/login', logIn)
auth.get('/me', me)
auth.delete('/me', logout)

export default auth
