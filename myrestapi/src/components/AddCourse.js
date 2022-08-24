import axios from "axios";
import React, { useEffect, useState } from "react";
import base_url from "../api/Bootapi";
import { ToastContainer, toast } from 'react-toastify';

const AddCourse=()=>{
  useEffect(()=>{
    document.title="Add Course"
  })

  const [course,setcourse]= useState({});
   
  //  form handler function
   const handleForm = (e)=>{
     console.log(course);
     postDataToServer(course);
     e.preventDefault();
   }

  //  creating function for post data
  const postDataToServer=(data)=>{
    axios.post(`${base_url}/courses`,data).then(
      (response)=>{
        console.log(response);
        console.log("success");
        toast.success("course has been added successfully",{position:"bottom-left"});
      },
      (error)=>{
        console.log(error);
        console.log("failed");
        toast.error("Course not added",{position:"bottom-left"});
      }
    );
  }


    return(
       <>
        <form onSubmit={handleForm}>
           <h2 className="text-center my-2">Fill Course Detail </h2>
           <div className="form-group">
             <label for="userid">User Id</label>
             <input type="text" className="form-control" id="userid" placeholder="Enter User Id"
              onChange={(e)=>{
                setcourse({...course,id:e.target.value})
              }}
             />
          </div>
          <div className="form-group">
             <label for="title">Title</label>
             <input type="text" className="form-control" id="title" placeholder="Enter Course Title"
              onChange={(e)=>{
                setcourse({...course,title:e.target.value})
              }}
             />
          </div>
          <div className="form-group">
             <label for="description">Descreption</label>
             <input type="texxtarea" className="form-control" id="description" style={{height:150}} placeholder="Enter Descreption"
              onChange={(e)=>{
                setcourse({...course,description:e.target.value})
              }}
             />
          </div>
              <div className="container text-center">
                  <button type="submit" className="btn btn-success">Add Course</button>
                  <button className="btn btn-warning ml-2" type="reset">Clear</button>
              </div>
           
        </form>
        <ToastContainer />
        </>  
    )
}

export default AddCourse