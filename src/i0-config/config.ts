import env from 'dotenv'

export const IS_DEVELOPER_VERSION = !process.env.PORT // false if release

IS_DEVELOPER_VERSION && env.config() // set env in developer mode

export const VERSION = '/4.0'

export const PORT = process.env.PORT || 7542
