import React, { useContext } from "react";
import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
	const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

	// const logIn = (e) => {
	// 	e.preventDefault();
	// 	setIsLoggedIn(true);
	// 	setAuthUser({
	// 		Name: "Sumant Kumar",
	// 	});
	// };
  const logOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setAuthUser(null);
  };
	return (
		<>
      <h1>Profile</h1>
      <span>User is currently : {isLoggedIn ? 'Logged In' : 'logged out'}</span><br/>
      {isLoggedIn ? (<span>User Name:{authUser.name}<br />Email:{authUser.email}</span>) : null};
      <br />
			{/* <button onClick={(e)=> {logIn(e)}}>Login</button> */}
			<button onClick={(e)=>{ logOut(e) }}>LogOut</button>
		</>
	);
};

export default Profile;
