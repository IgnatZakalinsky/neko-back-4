import {checkLogin} from '../a4-helpers/useAdmin'

export const loginLogic = (pass: string) => {
    const token = checkLogin(pass)

    if (!token) throw {error: 'not valid pass [' + pass + ']v2[' + token + ']'}

    return token
}