const router = require("express").Router();
const { User } = require("../Models/User");
const Token = require("../Models/Token");
const crypto = require("crypto");
const sendEmail = require("./Emailer");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const session = require('express-session');
router.use(session( 
	{
	  secret : 'secret-key',
	  resave : false ,
	  saveUninitialized : true,
	}));
router.post("/", async (req, res) => {
	
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ Email: req.body.Email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.Password,
			user.Password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		if (!user.verified) {
			let token = await Token.findOne({ userId: user._id });
			if (!token) {
				token = await new Token({
					userId: user._id,
					token: crypto.randomBytes(32).toString("hex"),
				}).save();
				const url = `localhost:3000/users/${user._id}/verify/${token.token}`;
				await sendEmail(user.Email, "Verify Email", url);
			}

			return res
				.status(400)
				.send({ message: "An Email sent to your account please verify" });
		}

		const token = user.generateAuthToken();
		req.session.user=user;
		
		res.status(200).send({ data: token, message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

const validate = (data) => {
	const schema = Joi.object({
		Email: Joi.string().email().required().label("Email"),
		Password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = router;