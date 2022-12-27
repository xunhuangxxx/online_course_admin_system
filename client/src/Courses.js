import React, {useEffect, useState} from "react";


const Courses = () =>{
    const [courses, setCourses] = useState([]);
    
    useEffect(()=> {
        fetch('http://localhost:5000/api/courses')
        .then(res => res.json())
        .then(res => setCourses(res))
        .catch(error => console.error(error.message));
    },[])
    
 
    return(
        <div className="wrap main--grid">
       
                {courses.map(course => {

                  return (
                    <a key={course.id} className="course--module course--link" href={`./courses/${course.id}`}>
                        <h2 className="course--label">Course</h2>
                        <h3 className="course--title">{course.title}</h3>
                    </a>
                  )               
                })}
            
                <a className="course--module course--add--module" href="./courses/create">
                    <span className="course--add--title">
                       New Course
                    </span>
                </a>         
        </div>
    )
}

export default Courses;