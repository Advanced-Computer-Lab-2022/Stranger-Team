import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { FaSignInAlt } from 'react-icons/fa';
import { AiOutlineUserAdd } from "react-icons/ai";


const Login = () => {
	const [data, setData] = useState({ Email: "", Password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3000/auth";
			const { data: res } = await axios.post(url, data);

			localStorage.setItem("token", res.data);
			console.log("res.userRole"+res.userRole);
			if(res.userRole == "Individual Trainee")
			{
				window.location = "/Home";
			}
			else if(res.userRole == "Corporate Trainee")
			{
				window.location = "/corporateTraineeHome";
			}
			else if(res.userRole == "Instructor")
			{
				window.location = "/InstructorCoursePage";
			}
			else
			{
				window.location = "/adminHome";
			}
			
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="text"
							placeholder="Email"
							name="Email"
							onChange={handleChange}
							value={data.Email}
							
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="Password"
							onChange={handleChange}
							value={data.Password}
							required
							className={styles.input}
						/>
						<Link to="/forgetPassword" style={{ alignSelf: "flex-start" }}>
							<p style={{ padding: "0 15px" }}>Forgot Password ?</p>
						</Link>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign In <FaSignInAlt style={{width:'25px',height:'25px'}}/>
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sign Up <AiOutlineUserAdd style={{width:'25px',height:'25px'}}></AiOutlineUserAdd>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;