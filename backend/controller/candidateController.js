const Candidate = require('../models/candidateModel');
const async = require('async');
const { parseExcel } = require('../utils/excelParser');

const uploadCandidates = async (req, res) => {
    try {
        const candidates = await parseExcel(req.file.path);

        async.eachSeries(candidates, async (candidate, callback) => {
            try {
                await Candidate.updateOne(
                    { email: candidate.email }, // Match based on email
                    { $set: candidate },        // Update fields
                    { upsert: true }            // Insert if it doesn't exist
                );
                // callback(null); /s// Proceed to the next candidate (success)
            } catch (err) {
                console.error(`Error processing candidate: ${candidate.email}`, err);
                callback(err); // Handle error for the specific candidate
            }
        }, (err) => {
            if (err) {
                return res.status(500).send({ message: "Error processing records", error: err });
            }
            res.send({ message: "All records have been successfully uploaded!" });
        });
    } catch (error) {
        res.status(500).send({ message: "Error parsing Excel file", error: error.message });
    }
};

module.exports = { uploadCandidates };
