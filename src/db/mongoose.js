const mongoose = require('mongoose')
const validator = require('validator');
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URL, {
	useNewURlParser: true,
	useCreateIndex: true
})