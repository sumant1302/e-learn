import "./App.css";
import { MyContext } from "./contexts/MyContext";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
	const [text, setText] = useState("");
	const [currPage, setCurrPage] = useState("home");
	useEffect(() => {
		setFooter();
	}, [currPage]);
	const setFooter = () => {
		const bodyHeight = document.body.clientHeight;
		const foot = document.getElementById("footer");
		if (window.screen.height > bodyHeight) {
			foot.style.position = "absolute";
			foot.style.bottom = "0";
			foot.style.right = "0";
		} else {
			foot.style.position = "relative";
		}
	};
	return (
		<div className="App">
			<MyContext.Provider value={{ text, setText, currPage, setCurrPage }}>
				<AuthProvider>
					<BrowserRouter>
						<Nav />
						<Routes>
							<Route path="/" element={<Home />}></Route>
							<Route path="/courses" element={<Courses />}></Route>
							<Route path="/login" element={<Login />}></Route>
							<Route path="/register" element={<Register />}></Route>
							<Route path="/profile" element={<Profile />}></Route>
						</Routes>
						<Footer />
					</BrowserRouter>
				</AuthProvider>
			</MyContext.Provider>
		</div>
	);
}

export default App;
