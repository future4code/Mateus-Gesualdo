import express, { Request, Response } from 'express'
import signupEndpoint from './endpoints/users/signupEndpoint'

const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.post('/users/signup', signupEndpoint)

export default app