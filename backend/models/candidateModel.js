const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    nameOfTheCandidate: String, 
    email: { type: String, unique: true }, 
    mobileNo: String, 
    dateOfBirth: String, 
    workExperience: String, 
    resumeTitle: String, 
    currentLocation: String, 
    postalAddress: String, 
    currentEmployer: String, 
    currentDesignation: String, 
}, { timestamps: true });

module.exports = mongoose.model('Candidate', candidateSchema);
