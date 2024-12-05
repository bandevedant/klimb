const express = require('express');
const mongoose = require('mongoose');
const candidateRoutes = require('./routes/candidateRoutes');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use('/api/candidates', candidateRoutes);

mongoose.connect(Process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

module.exports = app;
