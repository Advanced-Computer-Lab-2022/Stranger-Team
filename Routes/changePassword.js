
const router = require("express").Router();
const User  = require("../Models/User");
router.post("/", async (req, res) => {
	try {
				
		const em = "spuxhoward@gmail.com"; // this should be changed to current session logged in account
	
		let user = await User.findOne({Email:em});

		user.Password = req.query.Password;
        await user.save();
		res.status(200).send({ message: "Password has been changed !" });
	} catch (error) {
        console.log(error);
		res.status(500).send({ message: "Internal Server Error" });
		
	}
});
module.exports = router;