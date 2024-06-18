
import express from 'express';
import { urlencoded } from 'express';
import jsonwebtoke from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import db from './src/config/mongoose.config.js';
import User from './src/controller/user.controller.js';
import bodyparser from 'express';
import Authentication from './src/middleware/authentication.middleware.js';
import Report from './src/controller/report.controller.js';

const app = express();
app.use(urlencoded({
    extended: true
}));

const userCntrl = new User();
const authCntrl = new Authentication();
const reportCntrl = new Report();

app.post('doctors/register',userCntrl.registerDoctor);
app.post('/doctors/login',authCntrl.signIn);
app.post('/patients/register',userCntrl.registerPatient);
app.post('/patients/:id/create_report',reportCntrl.createReport);
app.post('/patients/:id/all_reports',reportCntrl.allReports);












// /doctors/register → with username and password
// - /doctors/login → returns the JWT to be used
// - /patients/register
// - /patients/:id/create_report
// - /patients/:id/all_reports
// /reports/:status






export default app;