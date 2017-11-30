const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/User");
//Since the following file returns no value, you only need the require statement
require("./services/passport");

const app = express();

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

const PORT = process.env.PORT || 5000;
app.listen(PORT);
