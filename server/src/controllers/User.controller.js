/* eslint-disable no-empty */
import UserModel from '../models/user.model.js'
import StatusCodes from '../../config/StatusCode.js'

const createUser = async (req, res) => {
	const user = new UserModel({
		username: req.body.username,
		password: req.body.password
	})
	try {
		const response = await user.save()
		res.status(StatusCodes.CREATED).send(response)
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}

const getAllUsers = async (req, res) => {
	try {
		const response = await UserModel.find()
		res.status(StatusCodes.OK).send(response)
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}

const getUserWithId = async (req, res) => {
	try {
		const response = await UserModel.findById(req.params.userId)
		res.status(StatusCodes.OK).send(response)

	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
			message: 'Error occured while trying to retrive user with ID ' + req.params.uderIs,
			error: error.message
		})

	}
}

const getUserWithUserNameQuery = async (req, res) => {
	try {
		const response = await UserModel.find({ username: req.query.username })
		response.length !== 0
			? res.status(StatusCodes.OK).send(response)
			: res.status(StatusCodes.NOTFOUND).send({ message: 'Couldnt find any user like ' + req.query.username })

	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
			message: 'Error occured while trying to retrive user with name ' + req.query.username,
			error: error.message
		})
	}
}

const updateUser = async (req, res) => {
	try {
		if (!req.body) { return res.status(StatusCodes.BAD_REQUEST).send({ message: 'Can´t update empty values' }) }
		const response = await UserModel.findByIdAndUpdate(req.params.userId, {
			username: req.body.username,
			password: req.body.password
		}, { new: true }) //uppdaterar med nya datan
		res.status(StatusCodes.OK).send(response)

	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
			message: 'Error occured while trying to update values of the user with ID: ' + req.params.userId,
			error: error.message
		})

	}
}
const deleteUser = async (req, res) => {
	try {
		//TODO adda ifall inget data skickas i params
		const response = await UserModel.findByIdAndDelete(req.params.userId)
		res.status(StatusCodes.OK).send({
			message: `Succesfully deleted user with username ${response.username} and ID: ${req.params.userId}`
		})

	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
			message: 'Error occured while trying to delete user with ID: ' + req.params.userId,
			error: error.message

		})

	}
}

export default {
	createUser,
	getAllUsers,
	getUserWithId,
	getUserWithUserNameQuery,
	updateUser,
	deleteUser
}

//Controller känner till model och skapar och ändrar models.