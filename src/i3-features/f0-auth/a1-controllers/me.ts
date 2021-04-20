import {Request, Response} from 'express'
import {tryWithSendErrorOrAnswer} from '../../../i1-common/c0-errors/errors'
import {meLogic} from '../a2-bll/meLogic'

export const me = async (req: Request, res: Response) => {
    const {token} = req.query

    tryWithSendErrorOrAnswer(
        res,
        () => {
            if (!token || typeof token !== 'string') throw {error: 'not valid token [' + token + ']v1'}

            return {data: {token: meLogic(token)}}
        }
    )
}
