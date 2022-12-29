import React, {useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import {Consumer} from "./Context";
import {Buffer} from 'buffer';

const CourseDetail = (props) =>{
    //get id params from path
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
    
    const handleDelete = () => {
        
        fetch(`http://localhost:5000/api/courses/${id}`, {
            method:"DELETE",
            headers : {
                'Authorization': `Basic ${Buffer.from(`${props.userInfo.emailAddress}:${props.userInfo.password}`).toString('base64')}`
            },
        })
        
    }
    return ( 
        <main>
            <div className="actions--bar">
                <div className="wrap">
{/* get user authorization                */}
                  <Consumer>
                       {(userInfo)=> {
                          console.log(course);
                          return (
                            userInfo.emailAddress === course.email && userInfo.emailAddress !== "" 
                            ? 
                            <div>
                               <a className="button" href={`/courses/${id}/update`}>Update Course</a>
                               <a className="button" href="/" onClick={handleDelete}>Delete Course</a> 
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
                            <Consumer>
                                {(userInfo) => {
                                    return (
                                        <p>By {userInfo.firstName} {userInfo.lastName}</p>
                                    )
                                }}
                            </Consumer>
                            
                            <ReactMarkdown > 
                               {course.description}
                            </ReactMarkdown>
                            
                        </div>
                        <div>
                            <h3 className="course--detail--title">Estimated Time</h3>
                               <p>{course.estimatedTime}</p>

                            <h3 className="course--detail--title">Materials Needed</h3>
                            <ul className="course--detail--list">
                                
                                {course.materialsNeeded && course.materialsNeeded.split('*').map((material, index) => {
                                    if(material !== ''){
                                        return (
                                            <li key={index}>
                                                <ReactMarkdown>
                                                   {material}
                                                </ReactMarkdown>
                                            </li>
                                        )
                                    }else{
                                        return null;
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