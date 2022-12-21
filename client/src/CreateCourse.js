import React, {useEffect, useState} from "react";

const CreateCourse = () => {
    const [errorMsg, setErrorMsg] = useState("");
    const [detail, setDetail] = useState({
        materialsNeeded: ""
    });

    fetch('http://localhost:5000/api/courses', {method : "POST"})
    .then(res => res.json())
    .then(res => {
        if(res.errors){       
            setErrorMsg(res.errors);        
        }
    })

    return (

        <div className="wrap">
        <h2>Create Course</h2>
        <div className="validation--errors">
            <h3>Validation Errors</h3>
            <ul>
                {errorMsg.map(error => {
                    return  <li>{error}</li>
                })}                
            </ul>
        </div>
        <form>
            <div className="main--flex">
                <div>
                    <label htmlFor="courseTitle">Course Title</label>
                    <input id="courseTitle" name="courseTitle" type="text" onChange={e => setDetail(prevDetail => ({...prevDetail, title: e.target.value}))} value={detail.title} />

                    <p>By Joe Smith</p>

                    <label htmlFor="courseDescription">Course Description</label>
                    <textarea id="courseDescription" name="courseDescription" onChange={e => setDetail(prevDetail => ({...prevDetail, description: e.target.value}))} value={detail.description}></textarea>
                </div>
                <div>
                    <label htmlFor="estimatedTime">Estimated Time</label>
                    <input id="estimatedTime" name="estimatedTime" type="text" onChange={e => setDetail(prevDetail => ({...prevDetail, estimatedTime: e.target.value}))} value={detail.estimatedTime} />

                    <label htmlFor="materialsNeeded">Materials Needed</label>
                    <textarea id="materialsNeeded" name="materialsNeeded" onChange={e => setDetail(prevDetail => ({...prevDetail, materialsNeeded: e.target.value}))} value={detail.materialsNeeded}></textarea>
                </div>
            </div>
            <button className="button" type="submit">Create Course</button>
            <button className="button button-secondary" onClick={event => event.preventDefault()}>Cancel</button>
        </form>
    </div>
    ) 
}

export default CreateCourse;