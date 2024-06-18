
import express from 'express';
import { urlencoded } from 'express';
import jsonwebtoke from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import db from './src/config/mongoose.config.js';
import User from './src/controller/user.controller.js';
import bodyparser from 'express';

const app = express();
app.use(urlencoded({
    extended: true
}));

const userCntrl = new User();

app.post('doctors/register',userCntrl.registerDoctor);
app.post('/doctors/login',userCntrl.signIn);










// /doctors/register → with username and password
// - /doctors/login → returns the JWT to be used
// - /patients/register
// - /patients/:id/create_report
// - /patients/:id/all_reports
// /reports/:status






export default app;