const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const Survey = mongoose.model("surveys");
//need to make sure functions are run in order
// to do this we use async and await
// How it works:
// when the code reaches mailer.send() the code is
// 'paused'. The send function is executed with
// the request being created. the request is sent
// out. Then the send function  (inside Mailer.js)
// pauses until a respone is recieved.
module.exports = app => {
	app.get("/api/surveys/thanks", (req, res) => {
		res.send("Thanks for your input!");
	});

	app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
		const { title, subject, body, recipients } = req.body;

		const survey = new Survey({
			title,
			subject,
			body,
			recipients: recipients.split(",").map(email => ({ email: email.trim() })),
			_user: req.user.id,
			dateSent: Date.now()
		});

		//Send an email.
		const mailer = new Mailer(survey, surveyTemplate(survey));
		try {
			await mailer.send();
			await survey.save();
			req.user.credits -= 1;
			const user = await req.user.save();
			res.send(user);
		} catch (err) {
			res.status(422).send(err);
		}
	});
};
