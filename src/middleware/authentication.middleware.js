import jwt from 'jsonwebtoken';
import cookieParser  from 'cookie-parser';
import userList from '../model/user.model.js';


const privateKey = process.env.Private_Key || 'abcd';

export default class Authentication {

   
        signIn = async(req,res) =>{
            try{
            const {username,password} = req.body;
            const userExits = await userList.findOne({name:username,passcode:password});
            if(userExits){
                const token =  jwt.sign({
                    name : username,
                    passcode : password
                },
                privateKey,
                {
                    expiresIn: '1h'
                }
            )
                return res.status(202).cookie('jwt',token,{
                    httpOnly:true
                });
            }else{
                return res.status(401).send("Incorrect Creds");
            }
    
        }catch(error){
        console.log(error);
    }}
    isAuth = async (req,res,next)=>{
        try{
            const token =req.cookies['jwt'];
        if(token!== null){
            try{
                jwt.verify(token,privateKey);
                next();
            }catch(error){
                return res.status(401).send('Unauthorized');
            }
        }else{
            return res.status(401).send('Unauthorized');
        }
        }catch(error){
            console.log(error);
            return res.status(501).send('Server Internal Error');
        }
    }
    signOut = (req,res)=>{
        res.cookie('jwt', '', {
            httpOnly: true,
            expires: new Date(0)
        }).send('Logged Out!!');


    }

    
}