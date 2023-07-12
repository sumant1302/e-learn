import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    
	return (
		<>
			<footer id="footer">
				<div className="footer-main">
					<div className="footer-left">
						<h3>eLearn Pvt. Limited</h3>
						<p>123 Main Street Anytown, India 54321</p>
                    </div>
                    <div className="footer-mid">
					<ul className="footer-nav">
						<Link to="/">
							<li>Home</li>
						</Link>
						<Link to="/courses">
							<li>Courses</li>
						</Link>
						<Link to="/profile">
							<li>Profile</li>
						</Link>
						<Link to="/login">
							<li>Login</li>
						</Link>
						<Link to="/register">
							<li>Register</li>
						</Link>
                        </ul>
                        </div>
					<div className="footer-connect">
						<h4>Follow Us</h4>
						<p>Instagram</p>
						<p>Twitter</p>
						<p>Facebook</p>
					</div>
                </div>
                <div className="footer-copyright">
                    ©️ eLearn Private Limited | All Right Reserved
                </div>
			</footer>
		</>
	);
};

export default Footer;
