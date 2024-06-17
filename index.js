
import express from 'express';
import { urlencoded } from 'express';
import jsonwebtoke from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import db from './src/config/mongoose.config.js'

const app = express();
app.use(urlencoded({
    extended: true
}));








// /doctors/register → with username and password
// - /doctors/login → returns the JWT to be used
// - /patients/register
// - /patients/:id/create_report
// - /patients/:id/all_reports
// /reports/:status






export default app;