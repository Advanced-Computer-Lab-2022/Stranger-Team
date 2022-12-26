import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./styles.modules.css";

const PasswordReset = () => {
	const [validUrl, setValidUrl] = useState(false);
	const [Password, setPassword] = useState("");
	const [confirmPassword, setconfirmPassword] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");
	const param = useParams();
	const url = `http://localhost:3000/passwordReset/${param.id}/${param.token}`;

	useEffect(() => {
		const verifyUrl = async () => {
			try {
				await axios.get(url);
				setValidUrl(true);
			} catch (error) {
				setValidUrl(false);
			}
		};
		verifyUrl();
	}, [param, url]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
            
            console.log("ana bozt");
			const { data } = await axios.post(`http://localhost:3000/passwordReset/${param.id}/${param.token}?Password=${Password}`, { Password ,confirmPassword});
			console.log("ana mboztsh");   //
            setMsg(data.message);
			setError("");
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				setMsg("");
			}
		}
	};

	return (
		<Fragment>
			{validUrl ? (
				<div className={styles.container}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Add New Password</h1>
						<input
							type="Password"
							placeholder="new Password"
							name="Password"
							onChange={(e) => setPassword(e.target.value)}
							value={Password}
							required
							className={styles.input}
						/>
						<input
							type="Password"
							placeholder="confirm new Password"
							name="confirmPassword"
							onChange={(e) => setconfirmPassword(e.target.value)}
							value={confirmPassword}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						{msg && <div className={styles.success_msg}>{msg}</div>}
						<button type="submit" className={styles.green_btn}>
							Submit
						</button>
					</form>
				</div>
			) : (
				<h1>404 Not Found</h1>
			)}
		</Fragment>
	);
};

export default PasswordReset;