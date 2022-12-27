import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Consumer } from "./Context";
import {Buffer} from "buffer";

const UpdateCourse = (props) => {
   
    let { id } = useParams();

    const [course, setCourse] = useState({
        title: "",
        description: "",
        estimatedTime: "",
        materialsNeeded: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    
//create function for submit button
    const handleSubmit = (e) =>{
         e.preventDefault();
         fetch(`http://localhost:5000/api/courses/${id}`, {
            method : "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${Buffer.from(`${props.userInfo.emailAddress}:${props.userInfo.password}`).toString('base64')}`
            },
            body: JSON.stringify(
            {
                title: course.title,
                description: course.description,
                estimatedTime: course.estimatedTime,
                materialsNeeded: course.materialsNeeded,
                userId:props.userInfo.userId
            })
        })
        .then(res => {
            if(res.status !== 204){  
                return res.json();                   
            }else{
                return {}
            }
        })
        .then(res => {
            if(res.errors) {
               setErrorMsg(res.errors)
            }
        })
    }
    

    useEffect(()=> {
        fetch(`http://localhost:5000/api/courses/${id}`)
        .then(res => res.json())
        .then(res => setCourse(res))
        .catch(error => console.error(error.message));
    },[id]);

    console.log(course);

    return (
        <div className="wrap">
            <h2>Update Course</h2>
            {
            errorMsg.length !== 0 && 
            (<div className="validation--errors">
            <h3>Validation Errors</h3>
            <ul>
                {errorMsg.map(error => {
                    return  <li>{error}</li>
                })}                
            </ul>
            </div>)
            }
            <form>
                <div className="main--flex">
                    <div>
                        <label htmlFor="courseTitle">Course Title</label>
                        <input id="courseTitle" name="courseTitle" type="text" onChange={e=>setCourse(prevDetail => ({...prevDetail, title: e.target.value}))} value={course.title}/>

                        <Consumer>
                            {(userInfo) => {
                                return (
                                   <p>By {userInfo.firstName} {userInfo.lastName}</p>
                                )
                            }}
                        </Consumer>

                        <label htmlFor="courseDescription">Course Description</label>
                        <textarea id="courseDescription" name="courseDescription" onChange={e=>setCourse(prevDetail => ({...prevDetail, description: e.target.value}))} value={course.description}></textarea>
                    </div>
                    <div>
                        <label htmlFor="estimatedTime">Estimated Time</label>
                        <input id="estimatedTime" name="estimatedTime" type="text" onChange={e=>setCourse(prevDetail => ({...prevDetail, estimatedTime: e.target.value}))} value={course.estimatedTime} />

                        <label htmlFor="materialsNeeded">Materials Needed</label>
                        <textarea id="materialsNeeded" name="materialsNeeded" onChange={e=>setCourse(prevDetail => ({...prevDetail, materialsNeeded: e.target.value}))} value={course.materialsNeeded}></textarea>
                    </div>
                </div>
                <button className="button" onClick={handleSubmit}>Update Course</button>
                <button className="button button-secondary" onClick={e => e.preventDefault()}>Cancel</button>
            </form>
        </div>
    )
    
}

export default UpdateCourse;