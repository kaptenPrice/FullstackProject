/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import dotenv from 'dotenv'

dotenv.config()


const notFound = (req, res, next) => {
    const myError = new Error(`Not found ${req.originalUrl}`)
    res.status(404)
    next(myError)
}
const errorHandler = (error, req, res, next) => {
    const statuscode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statuscode)
    res.json({
        statuscode: statuscode,
        message: error.message,
        stacktrace: process.env.ENVIROMENT === 'PRODUKTION' ? 'lols': error.stack,
    })
}
export default {
    notFound,
    errorHandler
}
