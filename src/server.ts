import express from 'express';
import routes from './routes';
import cors from 'cors'

const app = express()

app.use(routes)
app.use(cors)
app.use(express.json())

app.listen(3333)