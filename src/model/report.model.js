import mongoose from 'mongoose';
    
const{Schema} = mongoose;

const reportSchema = new Schema({

    status: String || 'positive',
    phone: String,
    dob: Date

});

const reports = mongoose.model('userList',userSchema);

export default reports;