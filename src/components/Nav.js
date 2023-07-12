import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { logout } from "../helper-functions/logout";
import { MyContext } from "../contexts/MyContext";

const Nav = () => {
	const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
    const { currPage, setCurrPage } = useContext(MyContext);
    const navigate = useNavigate();
    useEffect(() => {
       // Reset styles for all navigation items
			const navigationItems = document.querySelectorAll(".navigation li");
			navigationItems.forEach((item) => {
				item.style.color = "initial";
			});
        const curr = document.getElementById(currPage);
        curr.style.color = "red";
    },[currPage]);
    const auth = useAuth();
    const logoutFunc = (auth) => {
        logout(auth);
        navigate("/login");
        setCurrPage("login");
        window.confirm("Logged Out successfully");
    }
	return (
		<>
			<nav>
				<h1>
					<b style={{ color: "orange" }}>
						<i>e</i>
					</b>
					Learn
				</h1>
				<ul className="navigation" id="navigation">
					<Link to="/home" onClick={() => setCurrPage("home")}>
						<li id="home">Home</li>
					</Link>
					<Link to="/courses" onClick={() => setCurrPage("courses")}>
						<li id="courses">Courses</li>
					</Link>

					{isLoggedIn ? (
						<>
							<Link to="/profile" onClick={() => setCurrPage("profile")}>
								<li id="profile">Profile</li>
							</Link>
							<Link to="/login" onClick={() => logoutFunc(auth)}>
								<li>Logout</li>
							</Link>
						</>
					) : (
						<>
							<Link to="/login" onClick={() => setCurrPage("login")}>
								<li id="login">Login</li>
							</Link>
							<Link to="/register" onClick={() => setCurrPage("register")}>
								<li id="register">Register</li>
							</Link>
						</>
					)}
				</ul>
			</nav>
		</>
	);
};

export default Nav;
