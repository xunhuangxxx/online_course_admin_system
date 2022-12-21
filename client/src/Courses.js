import React, {useEffect, useState} from "react";


const Courses = () =>{
    const [coursesTitle, setCoursesTitle] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/api/courses')
        .then(res => res.json())
        .then(res => res.map(course => course.title))
        .then(res => setCoursesTitle(res))
        .catch(error => console.error(error.message));
    },[])

     
    return(
        <div className="wrap main--grid">
       
                {coursesTitle.map(title => {
                  return (
                    <a className="course--module course--link" href="course-detail.html">
                        <h2 className="course--label">Course</h2>
                        <h3 className="course--title">{title}</h3>
                    </a>
                  )
                   
                })}
            
                <a className="course--module course--add--module" href="./course/create">
                    <span className="course--add--title">
                       New Course
                    </span>
                </a>
             
         
        </div>
    )
}

export default Courses;