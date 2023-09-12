import express from 'express';
import dotenv from 'dotenv'
const app = express();
dotenv.config();

const port = process.env.PORT || 8000
app.listen(3000, () => {
    console.log('server is running on port 3000')
})
