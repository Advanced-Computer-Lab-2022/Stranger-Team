import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";

const ChangePassword = () => {
	const [validUrl, setValidUrl] = useState(true);
	const [data, setData] = useState({ Password: "", confirmPassword: "" });
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");
	const param = useParams();
	const url = `http://localhost:3000/changePassword`;
	const [oldPassword , setoldPassword] = useState("");
	const [Password , setPassword] = useState("");
	const [confirmPassword , setconfirmPassword] = useState("");
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
            const newUser = {oldPassword,Password,confirmPassword};
            const response = await fetch('/changePassword', {
                method: 'POST',
                body: JSON.stringify(newUser),
                headers: {
                    'Content-Type': 'application/json'
                }
                })
				const json = await response.json()  //
				if (!response.ok) {
					setError(json.message)
					}
					if (response.ok) {
					setError(null)
					setMsg(json.message);
					window.location = "/";
					}
			
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
							placeholder="current password"
							name="oldPassword"
							onChange={(e) => setoldPassword(e.target.value)}
							value={oldPassword}
							required
							className={styles.input}
						/>
					
						<input
							type="Password"
							placeholder="New password"
							name="Password"
							onChange={(e) => setPassword(e.target.value)}
							value={Password}
							required
							className={styles.input}
						/>
						<input
							type="Password"
							placeholder="confirm New password"
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

export default ChangePassword;