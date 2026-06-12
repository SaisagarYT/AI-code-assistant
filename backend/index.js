import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import clientSecrets from './config/infisical.js';
import { get } from 'node:http';

// const secret = await clientSecrets({
//     environment:"dev",
//     secretName:"BACKEND_PORT",
//     projectId:process.env.INFISICAL_PROJECT_ID
// });

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;
console.log(PORT)

app.get('/',(req,res) =>{
    return res.status(200).json({message:"Backend is live..."});
})

app.listen(PORT,() =>{
    console.log("Running:",PORT);
})

