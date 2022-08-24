import React, { useEffect } from "react";

const Home=()=>{

   useEffect(()=>{
     document.title="Home"
   })

    return(
   <div className="jumbotron text-center">
     <h1>Hey Folks!</h1>
     <p >This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
 
   <p className="lead">
    <button className="btn btn-primary btn-lg">Learn more</button>
    </p>
  </div>
    )
}

export default Home