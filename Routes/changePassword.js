const crypto = require("crypto");
const router = require("express").Router();
const { Individual_Trainee } = require("../Models/Individual Trainee");
const { corporateTrainees } = require("../Models/corporateTrainees");
const { Instructors } = require("../Models/Instructor");
const { Administrator } = require("../Models/Administrator");
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
		 
	
		let user = await Individual_Trainee.findOne({Email:req.session.user.Email});
			if(!user){
				user = await corporateTrainees.findOne({Email:req.session.user.Email});
			}
			if(!user){
				user = await Instructors.findOne({Email:req.session.user.Email});
			}
			if(!user){
				user = await Administrator.findOne({Username:req.session.user.Username});
			}

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