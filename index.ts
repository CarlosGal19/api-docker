import cors from 'cors'
import Express from 'express'
import dotenv from 'dotenv'

import ConnectDb from './src/config/db';

import UserRouter from './src/routes/user.routes'

const app = Express();

dotenv.config();
app.use(cors())
app.use(Express.json())

ConnectDb();

const PORT = process.env.PORT || 3000;

app.use('/users', UserRouter);

app.listen(PORT, () => {
    console.log(`App is being listened on port ${PORT}`);
})
