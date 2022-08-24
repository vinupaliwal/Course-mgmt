import React from "react";
import{Link,Outlet} from 'react-router-dom';

const Menus=()=>{
    return(
        <>
 <ul className="list-group">
  <li className="list-group-item"><Link to="/">Home</Link></li>
  <li className="list-group-item"><Link to="/addCourse">Add Course</Link></li>
  <li className="list-group-item"><Link to="/viewCourse">View Course</Link></li>
  <li className="list-group-item">About</li>
  <li className="list-group-item">Contact</li>
</ul>
 <Outlet/>
        </>
    )
}
export default Menus