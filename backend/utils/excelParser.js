const xlsx = require('xlsx');

const parseExcel = (filePath) => {
    const workbook = xlsx.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rawData = xlsx.utils.sheet_to_json(sheet);

    // Normalize the data to match schema
    return rawData.map(row => ({
        nameOfTheCandidate: row['Name of the Candidate'],
        email: row['Email'],
        mobileNo: row['Mobile No.'],
        dateOfBirth: row['Date of Birth'],
        workExperience: row['Work Experience'],
        resumeTitle: row['Resume Title'],
        currentLocation: row['Current Location'],
        postalAddress: row['Postal Address'],
        currentEmployer: row['Current Employer'],
        currentDesignation: row['Current Designation'],
    }));
};

module.exports = { parseExcel };
