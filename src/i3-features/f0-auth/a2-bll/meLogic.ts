import {checkToken} from '../a4-helpers/useAdmin'

export const meLogic = (oldToken: string) => {
    const token = checkToken(oldToken)

    if (!token) throw {error: 'not valid oldToken [' + oldToken + ']v2[' + token + ']'}

    return token
}