import React, { useState } from "react";
import { MyContext } from "../contexts/MyContext";
import { useContext } from "react";

const Home = () => {
   const { text, setText} = useContext(MyContext);
	const [searchVal, setSearchVal] = useState("");
	return (
		<>
			<div className="home-main">
				<div className="home-main-img">
					<img src={process.env.PUBLIC_URL + "/images/eLearn-bg.jpeg"} alt="eLearn Home" />
				</div>
				<input className="home-search"
					type="search"
					value={searchVal}
					onChange={(e) => setSearchVal(e.target.value)}
					placeholder="Search Content"
				/>
			</div>
         <div className="home-featured-content">
            <h2>Featured Content</h2>
            <div className="featured-home-card">
               
            </div>
			</div>
		</>
	);
};

export default Home;
