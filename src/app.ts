import express from 'express'
import 'dotenv/config'
import { routes } from './routes';
import { errorHandler } from './middlewares/errorHandler';
import { connectToDatabase } from './repo/connection';

const port = process.env.PORT || 3000
const app = express()
connectToDatabase()
app.use(express.json())

app.use('/', routes);

app.use(errorHandler)

app.listen(port, ()=> {
    console.log(`App backend started and listening on port ${port}..`)
})