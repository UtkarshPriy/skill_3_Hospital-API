
import userList from '../model/user.model.js';


export default class User {
    // Regiter the Doctor
    registerDoctor = async(req,res)=>{
        try{
            
            const {username,password,contact,dob} = req.body;
        let newDoctor = {
            name: username,
            role: 'Doctor',
            phone: contact || null,
            dob: dob || null,
            passcode:password
        };
        let userExists = await userList.findOne({name:username,phone:contact });
        if(userExists){
            return res.status(406).send('Doctor already registered');
        }else{
            await userList.create(newDoctor);
            return res.status(201).send("Doctor Registered successully");
        }
            }catch(error){
            console.log(error);
        }
    }
    // Regiter the Doctor
    registerPatient = async(req,res)=>{
        try{
    
            const {username,contact,dob} = req.body;
            let newPatient = {
                name: username,
                role: 'Patient',
                phone: contact || null,
                dob:dob || null
            };
        let userExists = await userList.findOne({phone:contact });
        if(userExists){
            return res.status(406).json({userExists});
        }else{
            await userList.create(newPatient);
            return res.status(201).send("Patient Registered successully");
        }
            }catch(error){
            console.log(error);
        }
    }

}