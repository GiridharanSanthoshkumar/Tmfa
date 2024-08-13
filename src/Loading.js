import React from "react";
import { ThreeCircles } from 'react-loader-spinner';
import "./styles.css";
function Loading(){
   return (
  <div style={{display:"flex",width:"100vw",height:"100vh",alignItems:"center",justifyContent:"center",
  } } className="loading">

   <ThreeCircles
    visible={true}
    height="100"
    width="100"
    color="#411515"
    ariaLabel="three-circles-loading"
    wrapperStyle={{}}
    wrapperClass="" />
    
    </div>);


}
export default Loading;