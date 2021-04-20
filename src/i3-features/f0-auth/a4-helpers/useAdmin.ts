import {v1} from 'uuid'

const ADMIN_PASS = process.env.ADMIN_PASS || ''

const adminToken = {t: '', id: 0}

export const checkLogin = (pass: string) => {
    if (!ADMIN_PASS || ADMIN_PASS !== pass) return ''

    adminToken.t = v1()
    adminToken.id = +setTimeout(() => {
        adminToken.t = ''
    }, 60_000 * 10)

    return adminToken.t
}

export const checkToken = (token: string) => {
    if (adminToken.t !== token) return ''

    clearTimeout(adminToken.id)
    adminToken.id = +setTimeout(() => {
        adminToken.t = ''
    }, 60_000 * 10)
    // generate new

    return adminToken.t
}

export const delToken = () => {
    clearTimeout(adminToken.id)
    adminToken.t = ''
}