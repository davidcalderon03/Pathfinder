const mongoose = require("mongoose");

const connectDB = async () => {

	try {
		await mongoose.connect('mongodb://127.0.0.1/social-media-project', {useNewUrlParser: true});
		console.log('MongoDB Connected...');
	}

	catch (error) {
		console.log("Unable to connect to the database", error);
	}
}
const closeDB = async () => {
	await mongoose.connection.close();
	console.log("Connection Closed.");
}

module.exports = { connectDB, closeDB };



// mongoose.connect("mongodb+srv://DavidCalderon03:HTG0xoDiZpYRQMEj@cluster0.nwrkv.mongodb.net/socialDB?retryWrites=true&w=majority");
//Key:            mongodb      Username        : Password @ clusterName   network    /databaseName   ...other parameters  
//Note: only have to change cluster name and collection name to change the database