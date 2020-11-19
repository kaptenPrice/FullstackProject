/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
// import middleWares from './src/middelwares/MiddleWares'
import middlewares from './src/middelwares/MiddleWares.js'
import Configuration from './config/Configuration.js'


const app = express()

app.use(helmet())
app.use(morgan('common'))



app.get('/recipe', (req, res) => {
	res.send('Pancakes!')
})


app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

Configuration.connectToDatabse()

Configuration.connectToPort(app)

















// app.get('/user', isAuthenticated,(req, res) => {
// })
// function isAuthenticated(req, res, next) {
// 	req.query.admin === 'true'
// 		? res.send('Youre are admin')
// 		: res.send('You cant acess this API URL ')

// 	next()
// }