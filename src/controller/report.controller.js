import reports from '../model/report.model.js';

export default class Report{
    // Save Report 
    createReport = async(req,res)=>{
        try{
            const{doctorname,patientname,status,phone,dob} = req.body;
        const newReport = {
            doctorname:doctorname,
            patientname:patientname,
            status:status,
            phone:phone,
            dob:dob,
            doctorname
        }
        await reports.create(newReport);
        return res.status(201).send('Report Added');
        }catch(error){
            console.log(error);
            res.status(501).send('Internal Serer Error')
        }
        

    }
    // Return all the reports for given patient
    allReports = async(req,res)=>{

        try{
            const{patientname} = req.body;
            const result = reports.find({patientname:patientname},{sort:{
                _id: 1 //Sort by Date Added Ascending
        }})
        return res.status(200).json({result})


        }catch(error){
            console.log(error);
            res.status(501).send('Internal Serer Error')
        }
    }
    // Return Reports on the basis of Status 
    reportStatus = async (req,res)=>{
        try{
            const{status} = req.body;
            let result = await reports.find({status:status});
            return res.status(200).json({result});
        }catch(error){
            res.status(501).send('Internal Serer Error')
        }
    }
}