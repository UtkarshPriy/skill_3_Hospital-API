import mongoose from 'mongoose';
    
const{Schema} = mongoose;

const userSchema = new Schema({
    name: { type:String, require:true},
    role: String,
    phone: String,
    dob: String,
    passcode: {type:String}

});

const userList = mongoose.model('userList',userSchema);

export default userList;