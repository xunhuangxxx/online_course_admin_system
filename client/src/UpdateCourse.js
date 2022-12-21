import React, {useEffect, useState, useParams} from "react";

const UpdateCourse = () => {
   
    let { id } = useParams();

    const [course, setCourse] = useState({});
    const [errorMsg, setErrorMsg] = useState("");

    fetch('http://localhost:5000/api/courses/:id', {method : "POST"})
    .then(res => res.json())
    .then(res => {
        if(res.errors){       
            setErrorMsg(res.errors);        
        }
    })

    useEffect(()=> {
        fetch(`http://localhost:5000/api/courses/${id}`)
        .then(res => res.json())
        .then(res => setCourse(res))
        .catch(error => console.error(error.message));
    },[id]);

    return (
        <div className="wrap">
            <h2>Update Course</h2>
            <p>{errorMsg}</p>
            <form>
                <div className="main--flex">
                    <div>
                        <label htmlFor="courseTitle">Course Title</label>
                        <input id="courseTitle" name="courseTitle" type="text" onChange={e=>setCourse(prevDetail => ({...prevDetail, title: e.target.value}))} value={course.title}/>

                        <p>By Joe Smith</p>

                        <label htmlFor="courseDescription">Course Description</label>
                        <textarea id="courseDescription" name="courseDescription" onChange={e=>setCourse(prevDetail => ({...prevDetail, description: e.target.value}))} value={course.description}></textarea>
                    </div>
                    <div>
                        <label htmlFor="estimatedTime">Estimated Time</label>
                        <input id="estimatedTime" name="estimatedTime" type="text" onChange={e=>setCourse(prevDetail => ({...prevDetail, estimatedTime: e.target.value}))} value={course.estimatedTime} />

                        <label htmlFor="materialsNeeded">Materials Needed</label>
                        <textarea id="materialsNeeded" name="materialsNeeded" onChange={e=>setCourse(prevDetail => ({...prevDetail, materialNeeded: e.target.value}))} value={course.materialNeeded}></textarea>
                    </div>
                </div>
                <button className="button" type="submit">Update Course</button>
                <button className="button button-secondary" onClick={e => e.preventDefault()}>Cancel</button>
            </form>
        </div>
    )
    
}

export default UpdateCourse;