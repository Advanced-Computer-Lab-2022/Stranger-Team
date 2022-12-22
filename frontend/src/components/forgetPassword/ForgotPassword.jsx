import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
	const [Email, setEmail] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const subject ={Email};
	//	console.log("email is "+Email);
        const response = await fetch(`/passwordReset/?Email=${Email}`, {
			
        method: 'POST',
        body: JSON.stringify(subject),
        headers: {
            'Content-Type': 'application/json'
        }
        })
		console.log("email is "+Email);
        const json = await response.json()
		console.log(json);
        if (!response.ok) {
        setError(json.message)
        }
        if (response.ok) {
        setError(null)
        setEmail('')
		setMsg(json.message);
		
        }
		const { data } = await axios.post(`/passwordReset/?Email=${Email}`, { Email});
		console.log("data:"+data);
		//setMsg(data.message);
		// try {
		// 	console.log("email is "+Email);
		// 	const url = `http://localhost:3000/passwordReset`;
		// 	console.log("email is "+Email);
		// 	const { data } = await axios.post(url, { Email});
		// 	console.log(Email);
		// 	setMsg(data.message);
		// 	setError("");
		// } catch (error) {
		// 	if (
		// 		error.response &&
		// 		error.response.status >= 400 &&
		// 		error.response.status <= 500
		// 	) {
		// 		setError(error.response.data.message);
		// 		setMsg("");
		// 	}
		// }
	};

	return (
		<div className={styles.container}>
			<form className={styles.form_container} onSubmit={handleSubmit}>
				<h1>Forgot Password</h1>
				<input
					type="text"
					
					name="Email"
					onChange={(e) => setEmail(e.target.value)}
					value={Email}
					required
					className={styles.input}
				/>
				{/* { <link to = "/forgetPassword" style = {{alignSelf:"flex-start"}}><p>Forgot Password?</p></link> } */}
				{error && <div className={styles.error_msg}>{error}</div>}
				{msg && <div className={styles.success_msg}>{msg}</div>}
               
				<button type="submit" className={styles.green_btn}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default ForgotPassword;