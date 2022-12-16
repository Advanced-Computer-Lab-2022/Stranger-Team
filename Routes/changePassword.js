const crypto = require("crypto");
const router = require("express").Router();
const {User}  = require("../Models/User");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const bcrypt = require("bcrypt");
router.post("/", async (req, res) => {
	try {
		const passwordSchema = Joi.object({
			Password: passwordComplexity().required().label("Password"),});	
			const { error } = passwordSchema.validate(req.body);
		
		if (error)
			return res.status(400).send({ message: error.details[0].message });
		 // this should be changed to current session logged in account
	
		const user = await User.findOne({Email:req.session.user.Email});

		const salt = await bcrypt.genSalt();
		const hashPassword = await bcrypt.hash(req.query.Password, salt);
		user.Password = hashPassword;
        await user.save();
		res.status(200).send({ message: "Password has been changed !" });
	} catch (error) {
        console.log(error);
		res.status(500).send({ message: "Internal Server Error" });
		
	}
});
module.exports = router;