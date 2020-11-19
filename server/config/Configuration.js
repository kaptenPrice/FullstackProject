/* eslint-disable no-undef */
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectToDatabse = async () => {
	const dbUrl=process.env.DATABASE_URL
	try {
		await mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false })
		console.log('Succesfully connected to DB'.toUpperCase())

	} catch (error) {
		console.log('Error while trying to connect to DB', error)
		process.exit()

	}
}
const connectToPort = (app) => {
	const port = process.env.PORT
	app.listen(port, () => {
		console.log(`Server is running on port ${port}`.toUpperCase())
	})
}

export default { connectToDatabse, connectToPort }