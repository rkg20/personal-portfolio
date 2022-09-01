import GitHubIcon from "@material-ui/icons/GitHub";
import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../pages/Projects";
import "./ProjectDisplay.css";
const ProjectDisplay=()=>{
    const {id}=useParams();
    const project =projectList[id];
    return(
        <div className="project">  
            <h1>{project?.name}</h1>
            <img src={project?.image} alt="" />
            <p>
                <b>Technology Used:</b>{project?.skills}
            </p>
            <a href="{project?.link}" alt="" target={"_blank"}><GitHubIcon/> </a>

        </div>
        
    );
}

export default ProjectDisplay;