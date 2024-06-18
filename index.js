// Import necessary modules
import express from 'express';
import { urlencoded } from 'express';
// import jsonwebtoken from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import db from './src/config/mongoose.config.js';
import User from './src/controller/user.controller.js';
import Authentication from './src/middleware/authentication.middleware.js';
import Report from './src/controller/report.controller.js';

const app = express();
app.use(urlencoded({extended: true}));
app.use(express.json());



// Initialize controllers
const userCntrl = new User();
const authCntrl = new Authentication();
const reportCntrl = new Report();

// Define routes for the application
app.post('/doctors/register',userCntrl.registerDoctor);
app.post('/doctors/login',authCntrl.signIn);
app.post('/patients/register',userCntrl.registerPatient);
app.post('/patients/:id/create_report',reportCntrl.createReport);
app.post('/patients/:id/all_reports',reportCntrl.allReports);
app.post('/reports/:status',reportCntrl.reportStatus);




// Export the Express app instance
export default app;