import React from "react";

const Course=({course})=>{
    return(
        <>
            <div className="card text-center">
                <div className="card-body">
                    <div className="card-subtitle font-weight-bold">{course.title}</div>
                    <div className="card-text">{course.description}</div>
                    <div>
                        <button className="btn btn-danger">Delete</button>
                        <button className="btn btn-warning ml-3">Update</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Course