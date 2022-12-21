import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";

const ChangePassword = () => {
	const [validUrl, setValidUrl] = useState(false);
	const [Password, setPassword] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");
	const param = useParams();
	const url = `http://localhost:3000/changePassword/?Password=${Password}`;

	useEffect(() => {
		const verifyUrl = async () => {
		
				setValidUrl(true);
			
		};
		verifyUrl();
	}, [param, url]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
            
            console.log("ana bozt");
			const { data } = await axios.post(`http://localhost:3000/changePassword/?Password=${Password}`, { Password });
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
						<h1>Change Password</h1>
						<input
							type="Password"
							placeholder="Password"
							name="Password"
							onChange={(e) => setPassword(e.target.value)}
							value={Password}
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

export default ChangePassword;