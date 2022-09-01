import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar=()=>{
    // 460px 616px for mobile view
   
    
    return(
        <div className="navbar" >

            <div className="links">
                <Link to="/" >Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience" >Experience</Link> 
                 {/* <Link to="/about" >About</Link> */}
            </div>
        </div>
    );
}
export default Navbar;
