import express from 'express';
import routes from './routes';
import cors from 'cors'

const app = express()
var corsOptions = {
    origin: '*'
}

app.use(routes)
app.use(cors(corsOptions))
app.use(express.json())

app.listen(3333)