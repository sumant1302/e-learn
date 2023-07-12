import React, { useState, useEffect, useContext } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import { user } from "../data/user";
import { MyContext } from "../contexts/MyContext";

const Register = () => {
  const navigate = useNavigate();
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
  const { currPage, setCurrPage } = useContext(MyContext);

	const [regEmail, setRegEmail] = useState("");
	const [regName, setRegName] = useState("");
  const [regPass, setRegPass] = useState("");
  const [regConfirmPass, setRegConfirmPass] = useState("");
  
  const registerFunc = () => {
    let emailGood = false;
    regEmail = regEmail.trim();
    if (regEmail.includes("@") && regEmail.includes(".com")) {
      const email = regEmail.split("@");
      const emailLeft = email[0];
      const emailDomain = email[1];
      console.log(emailLeft + " " + emailDomain);
      emailGood = true;
      if (regPass === regConfirmPass && emailGood) {
        setIsLoggedIn(true);
        setAuthUser({
          name: regName.trim(),
          email: regEmail.trim(),
        });
        navigate("/");
      } else {
        window.alert("Password and Confirm Password doesn't match");
      }
    } else {
      emailGood = false;
      window.alert("PLease check your email");
    }
  }
  return (
		<div className="register">
			<h2>Register</h2>
			<div className="reg-form">
        <input
          className="reg-name"
          value={regName}
          type="text"
          onChange={(e) => setRegName(e.target.value)}
          placeholder="Enter Name"
          required={true}
        />
				<input
					className="reg-email"
					value={regEmail}
					type="email"
					onChange={(e) => setRegEmail(e.target.value)}
					placeholder="Enter email"
					required={true}
        />
				<input
					className="reg-pass"
					value={regPass}
					type="password"
					onChange={(e) => setRegPass(e.target.value)}
					placeholder="Enter password"
					required={true}
        />
        	<input
					className="reg-pass"
					value={regConfirmPass}
					type="password"
					onChange={(e) => setRegConfirmPass(e.target.value)}
					placeholder="Enter password"
					required={true}
				/>
				<button className="reg-button" type="submit" onClick={() => registerFunc(regEmail, regPass)}>
					Register
				</button>
			</div>
		</div>
	);
}

export default Register;