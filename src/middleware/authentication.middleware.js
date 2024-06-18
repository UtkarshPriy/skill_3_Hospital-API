import jwt from 'jsonwebtoken';
import cookieParser  from 'cookie-parser';
import userList from '../model/user.model.js';


const privateKey = process.env.Private_Key || 'abcd';

export default class Authentication {

    // Check Credentials and return JWT token
   
        signIn = async(req,res) =>{
            try{
            
            const {username,password} = req.body;
            const userExits = await userList.findOne({name:username,passcode:password});
            console.log(userExits);
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
            return res.status(202).json({ token });

            //Below was not working for postman
                // return res.cookie('jwt',token,{
                //     httpOnly:true
                // }).status(201);
            }else{
                return res.status(401).send("Incorrect Creds");
            }
    
        }catch(error){
        console.log(error);
    }}
    // Verify JWT Token 

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
    // Detroy JWT Token once user logged out
    signOut = (req,res)=>{
        res.cookie('jwt', '', {
            httpOnly: true,
            expires: new Date(0)
        }).send('Logged Out!!');


    }

    
}