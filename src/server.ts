import express from 'express';
import routes from './routes';
import cors from 'cors'

const app = express()

app.use(cors)
app.use(express.json())
app.use(routes)

console.log('\n Up N running dawg');

app.listen(3333);
