
import userList from '../model/user.model.js';


export default class User {

    registerDoctor = async(req,res)=>{
        try{
            const {username,password,contact,dob} = req.body;
        let newDoctor = {
            name: username,
            role: 'Doctor',
            phone: contact || null,
            dob: dob || null
        };
        let userExists = await userList.findOne({name:username,phone:contact });
        if(userExists){
            return res.status(406).send('Doctor already registered');
        }else{
            await userList.createOne(newDoctor);
            return res.status(201).send("Doctor Registered successully");
        }
            }catch(error){
            console.log(error);
        }
    }


    signIn = async(req,res) =>{


    }
}