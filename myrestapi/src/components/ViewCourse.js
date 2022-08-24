import React, { useEffect, useState } from "react";
import Course from "./Course";
import base_url from "../api/Bootapi";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';



const ViewCourse=()=>{

    const [courses,setcourses] = useState([]);

    useEffect(()=>{
        document.title="View All Course"
    },[])

    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
               console.log(response);
               setcourses(response.data);
                toast.success('course has been loaded',{position:"bottom-left"});
                
            },
            (error)=>{
              console.log(error);
              toast.error("something went wrong",{position:"bottom-left"});
            }
            
        );
    };
 
  useEffect(()=>{
    getAllCoursesFromServer();
  },[]);

    return(
        <>
            <div>
                <h1>All Courses</h1>
                <p>List of courses are as follow</p>
                {
                    courses.length>0 ? courses.map((item)=> <Course key={item.id} course={item}/> ) : "No course"
                }
                <ToastContainer />
            </div>
        </>
    )
}

export default ViewCourse