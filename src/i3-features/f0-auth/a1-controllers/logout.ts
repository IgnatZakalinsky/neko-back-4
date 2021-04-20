import {Request, Response} from 'express'
import {tryWithSendErrorOrAnswer} from '../../../i1-common/c0-errors/errors'
import {logoutLogic} from '../a2-bll/logoutLogic'

export const logout = async (req: Request, res: Response) => {
    tryWithSendErrorOrAnswer(
        res,
        () => {
            return {data: {token: logoutLogic()}}
        }
    )
}
