import {v1} from 'uuid'

const ADMIN_PASS = process.env.ADMIN_PASS || ''

const adminToken = {t: ''}

export const checkLogin = (pass: string) => {
    if (!ADMIN_PASS || ADMIN_PASS !== pass) return ''

    adminToken.t = v1()

    return adminToken.t
}