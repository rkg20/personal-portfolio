import React from "react";
import LinkedInIcon  from "@material-ui/icons/LinkedIn";
import GitHubIcon  from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

import "./Home.css"
const Home=()=>{
    return(
        <div className="home">
            <div className="about">
                <h2>Hi, I am Rahul Gupta</h2>
                <div> 
                    <p>A software developer with a passion for learning and creating.</p>    
                    <div className="social-media">
                    <a href="https://www.linkedin.com/in/rahul-gupta-37021a16b/" alt="" target="_blank" rel="noreferrer"><LinkedInIcon /> </a>
                    <a href="maitto:rkgdec2000@gmail.com" alt="" target="_blank" rel="noreferrer"><EmailIcon/></a>
                    <a href="https://github.com/rkg20" alt="" target="_blank" rel="noreferrer"><GitHubIcon/></a>
                    </div>                
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>HTML, CSS, ReactJS, BootStrap</span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>NodeJS, Java Spring, MySQL, MongoDB</span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>C, C++, Java, JavaScript </span>
                    </li>
                </ol>
            </div>
        </div>
    );
}
export default Home;