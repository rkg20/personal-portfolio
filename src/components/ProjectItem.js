import React from "react";
import "./ProjectItem.css";
import { useNavigate } from "react-router-dom";
const ProjectItem=({image,name,id})=>{
    const navigate=useNavigate();

    return(
        <div className="project-item"
            onClick={()=>{
                navigate("/projects/"+id);
            }}
        >
            <div style={{backgroundImage:`url(${image})`}} className="bg-image">
               <h1>{name}</h1>
            </div>
        </div>
    );
}
export default ProjectItem;