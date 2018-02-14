const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
	app.post("/api/stripe", requireLogin, async (req, res) => {
		const charge = await stripe.charges.create({
			amount: 500,
			currency: "usd",
			description: "$5 for 5 credits",
			source: req.body.id
		});

		// Whenever you are making use of passport,
		// and the user has signed into the application
		// you can access the current user as req.user
		req.user.credits += 5;
		const user = await req.user.save();
		res.send(user);
	});
};
