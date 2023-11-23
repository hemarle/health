const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();


const URI = process.env.MONGO_URI;
const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handle routing and requests to React app
app.get('/api', (req, res) => {
	res.json('working');
});

// function to connect to database
async function connect() {
	try {
		await mongoose.connect(URI);
		console.log('Connected to MongoDB');
	} catch (error) {
		console.log(error);
	}
}

connect();
// console message to confirm port is running
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
