import React from "react";

const Course = ({item}) => {
    
    return (
        <>
            <div className="course">
                
                <h4>{item.title}</h4>
                <iframe
				width="560"
				height="315"
				src={item.videoLink + "?controls=0"}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen></iframe>

            </div>
        </>
    );
}
export default Course;