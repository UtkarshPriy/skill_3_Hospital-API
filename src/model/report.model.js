import mongoose from 'mongoose';
    
const{Schema} = mongoose;

const reportSchema = new Schema({
    doctorname: String,
    patientname: String,
    status: String || 'positive',
    phone: String,
    dob: String

});

const reports = mongoose.model('report',reportSchema);

export default reports;