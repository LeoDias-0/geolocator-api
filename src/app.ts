import express from 'express'
import cors from 'cors'

import * as addressController from './controllers/addressController'

const app = express()
app.use(cors())
app.use(express.json())


app.post('/addresses', addressController.returnDistances)

export default app