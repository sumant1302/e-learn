import React,{useContext, useEffect, useState} from "react";
import Course from "./Course";
import { MyContext } from "../contexts/MyContext";

import { courses } from "../data/courses";
const Courses = () => {
  const { text, setText } = useContext(MyContext);
  const [currCourse, setCurrCourse] = useState("");
  useEffect(() => {
    console.log(currCourse);
  },[currCourse])
  const selectCourse = (title) => {
    setCurrCourse(title);
  }
	return (
		<>
      <h1>Courses</h1>
      <div className="courses">
        <div className="courses-left">
        {courses.map((item) => (
          <p onClick={()=>selectCourse(item.title)}>{item.title}</p>
          ))}
        </div>
			{/* <h1>{text}</h1> */}
			{/* <button onClick={() => setText("")}>Remove</button> */}
			<div className="courses-right">
          {courses.map((item) => (
            item.title === currCourse ? 
          <Course item={item} /> : ""
          ))}
          </div>
			</div>
		
		</>
	);
};

export default Courses;
