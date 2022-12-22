const router = require("express").Router();
const {User}  = require("../Models/User");
const Token = require("../Models/Token");
const crypto = require("crypto");
const sendEmail = require("./Emailer");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const bcrypt = require("bcrypt");

// send password link
router.post("/", async (req, res) => {
	try {
		const emailSchema = Joi.object({
			Email: Joi.string().email().required().label("Email"),
		});
		
		const { error } = emailSchema.validate(req.body);
	//	console.log(error);
		if (error)
		{
		
		
		return res.status(400).send({ message: error.details[0].message });
		}
			
		const em = req.query.Email;
	//	console.log(em);

		const user = await User.findOne({Email:em});
	//	console.log("user:");
		if (!user)
			return res
				.status(409)
				.send({ message: "User with given email does not exist!" });

				
		let token = await Token.findOne({ userId: user._id });
		if (!token) {
			token = await new Token({
				userId: user._id,
				token: crypto.randomBytes(32).toString("hex"),
			}).save();
		}

		const url = `localhost:3000/passwordReset/${user._id}/${token.token}/`;
		await sendEmail(user.Email, "Password Reset", url);
		res.status(200).send({ message: "Password reset link sent to your email account" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
		
	}
});

// verify password reset link
router.get("/:id/:token", async (req, res) => {
	try {
		const user = await User.findOne({ _id: req.params.id });
		if (!user) return res.status(400).send({ message: "Invalid link" });

		const token = await Token.findOne({
			userId: user._id,
			token: req.params.token,
		});
		if (!token) return res.status(400).send({ message: "Invalid link" });

		res.status(200).send("Valid Url");
	} catch (error) {
	
		res.status(500).send({ message: "Internal Server Error" });
	}
});

//  set new password
router.post("/:id/:token", async (req, res) => {
	try {
		const passwordSchema = Joi.object({
			Password: passwordComplexity().required().label("Password"),
		});
		
		const { error } = passwordSchema.validate(req.body);
		
		if (error)
			return res.status(400).send({ message: error.details[0].message });
		
		const user = await User.findOne({ _id: req.params.id });
		
		if (!user) return res.status(400).send({ message: "Invalid link" });

		const token = await Token.findOne({
			userId: user._id,
			token: req.params.token,
		});
		if (!token) return res.status(400).send({ message: "Invalid link" });
		const salt = await bcrypt.genSalt();
		const hashPassword = await bcrypt.hash(req.query.Password, salt);
		user.Password = hashPassword;
		await user.save();
		await token.remove();

		res.status(200).send({ message: "Password reset successfully" });
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;