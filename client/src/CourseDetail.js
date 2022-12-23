import React, {useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import {Consumer} from "./Context"

const CourseDetail = () =>{
    let { id } = useParams();
    const [course, setCourse] = useState({
        materialsNeeded: '',
    });
    useEffect(()=> {
        fetch(`http://localhost:5000/api/courses/${id}`)
        .then(res => res.json())
        .then(res => setCourse(res))
        .catch(error => console.error(error.message));
    },[id]);

    return (
        <main>
            <div className="actions--bar">
                 <div className="wrap">
                    
              
                  <Consumer>
                       {(userInfo)=> {
                          return (
                            userInfo.email !== "" 
                            ? 
                            <div>
                               <a className="button" href={`courses/${id}/update`}>Update Course</a>
                               <a className="button" href="/">Delete Course</a> 
                            </div>
                            :
                            <div></div>

                          );                       
                      }}
                         
                   </Consumer>
                    <a className="button button-secondary" href="/">Return to List</a>
                </div>
            </div>
                <div className="wrap">
                <h2>Course Detail</h2>
                <form>
                    <div className="main--flex">
                        <div>
                            <h3 className="course--detail--title">Course</h3>
                            <h4 className="course--name">{course.title}</h4>
                            <p>By {course.firstName} {course.lastName}</p>
                            <ReactMarkdown > 
                               {course.description}
                            </ReactMarkdown>
                            
                        </div>
                        <div>
                            <h3 className="course--detail--title">Estimated Time</h3>
                            <p>14 hours</p>

                            <h3 className="course--detail--title">Materials Needed</h3>
                            <ul className="course--detail--list">
                                
                                {course.materialsNeeded.split('*').map((material, index) => {
                                    if(material !== ''){
                                    return (
                                        <ReactMarkdown>
                                          <li key={index}>{material}</li>
                                        </ReactMarkdown>
                                    )
                                    }
                                })} 
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default CourseDetail;