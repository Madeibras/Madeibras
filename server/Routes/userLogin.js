import express from 'express'
const user = express.Router()
import { registerUsers, getUsers, loginUser } from '../Controllers/UserController.js'

user.get('/users', getUsers)

user.post('/register', registerUsers)

user.post('/login', loginUser)

export default user