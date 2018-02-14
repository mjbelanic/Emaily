const mongoose = require("mongoose");
//The following line is destructured. It is the same as typing:
//const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: {
		type: String
	},
	credits: {
		type: Number,
		default: 0
	}
});

mongoose.model("users", userSchema);
