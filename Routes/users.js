const router = require("express").Router();
const { User, validate } = require("../Models/User");
const Token = require("../Models/Token");
const crypto = require("crypto");
const sendEmail = require("./Emailer");
const bcrypt = require("bcrypt");
const countryToCurrency = require('iso-country-currency');

router.post("/", async (req, res) => {
	console.log(req.body);
	try {
		
		const { error } = validate(req.body);
		console.log(error);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		let user = await User.findOne({ Email: req.body.Email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

				const salt = await bcrypt.genSalt();
		const hashPassword = await bcrypt.hash(req.body.Password, salt);

		user = await new User({ ...req.body, Password: hashPassword }).save();
		user.Currency = countryToCurrency.getParamByParam('countryName', user.Country, 'Currency');
		const token = await new Token({
			userId: user._id,
			token: crypto.randomBytes(32).toString("hex"),
		}).save();
		const url = `localhost:3000/users/${user.id}/verify/${token.token}`;
		await sendEmail(user.Email, "Verify Email", url);

		res
			.status(201)
			.send({ message: "An Email sent to your account please verify" });
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: "Internal Server Error" });
	}
});

router.get("/:id/verify/:token/", async (req, res) => {
	try {
		const user = await User.findOne({ _id: req.params.id });
		//console.log("user:"+user);
		if (!user) return res.status(400).send({ message: "Invalid link" });

		const token = await Token.findOne({
			userId: user._id,
			token: req.params.token,
		});
		
		if (!token) return res.status(400).send({ message: "Invalid link" });

		await User.updateOne({ Email: user.Email, verified: true });
				console.log("user:");

		await token.remove();
		res.status(200).send({ message: "Email verified successfully" });
		
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;