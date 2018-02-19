const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
require("./models/User");
require("./models/Survey");
//Since the following file returns no value, you only need the require statement
require("./services/passport");

const app = express();

app.use(bodyParser.json());
app.use(
	cookieSession({
		// cookie will last 30 days before expiring
		maxAge: 30 * 24 * 60 * 60 * 1000,
		// encrypts the cookie
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || keys.mongodbURI, {
	useMongoClient: true
});

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);
// Configuration to make sure express operates
// correctly when in the production environment.
if (process.env.NODE_ENV === "production") {
	// Express will serve up production assets
	// like our main.js file or main.css file.
	app.use(express.static("client/build"));
	// Express will serve up the index.html file
	// if it doesn't recognize the routes
	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
