const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async (req, res) => {
	const { email, message } = req.body;

	if (
		email !== "" &&
		message !== "" &&
		/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
	) {
		const msg = {
			to: "raymond.f.kneipp@gmail.com",
			from: `Customer <${email}>`,
			subject: "Message from raymondkneipp.com",
			text: message
		};

		try {
			await sgMail.send(msg);
			res.json({ msg: "success" });
		} catch (e) {
			res.json({ e });
		}
	} else {
		res.json({ error: "Email not valid and/or no message supplied" });
	}
};
