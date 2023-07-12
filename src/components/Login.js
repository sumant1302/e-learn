import React, { useState, useEffect, useContext } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import { user } from "../data/user";
import { MyContext } from "../contexts/MyContext";

const Login = () => {
	const navigate = useNavigate();
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
  const { currPage, setCurrPage } = useContext(MyContext);
	const [logEmail, setLogEmail] = useState("");
	const [logPass, setLogPass] = useState("");
	useEffect(() => {
		if (isLoggedIn) {
      navigate("/");
      setCurrPage("home");
    }
	}, [isLoggedIn]);

	const loginFunc = (logEmail, logPassword) => {
		if (logEmail === "" || logPassword === "") {
			return;
		}
		for (let i = 0; i < user.length; i++) {
			if (user[i].email === logEmail && user[i].password === logPassword) {
				setIsLoggedIn(true);
				setAuthUser({
					name: user[i].name,
					email: user[i].email,
				});
				window.alert("Logged In successfully");
			}
		}
	};

	return (
		<div className="login">
			<h2>Login</h2>
			<div className="log-form">
				<input
					className="log-email"
					value={logEmail}
					type="email"
					onChange={(e) => setLogEmail(e.target.value)}
					placeholder="Enter email"
					required={true}
				/>
				<input
					className="log-pass"
					value={logPass}
					type="password"
					onChange={(e) => setLogPass(e.target.value)}
					placeholder="Enter password"
					required={true}
				/>
				<button className="login-button" type="submit" onClick={() => loginFunc(logEmail, logPass)}>
					Login
				</button>
			</div>
		</div>
	);
};

export default Login;
