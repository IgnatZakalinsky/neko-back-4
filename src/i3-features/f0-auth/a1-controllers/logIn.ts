import {Request, Response} from 'express'
import {tryWithSendErrorOrAnswer} from '../../../i1-common/c0-errors/errors'
import {loginLogic} from '../a2-bll/loginLogic'

export const logIn = async (req: Request, res: Response) => {
    const {pass} = req.body

    tryWithSendErrorOrAnswer(
        res,
        () => {
            if (!pass || typeof pass !== 'string') throw {error: 'not valid pass [' + pass + ']v1'}

            return {data: {token: loginLogic(pass)}}
        }
    )
}
