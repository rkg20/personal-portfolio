import React from "react";
import "./Projects.css";
import ProjectItem from "../components/ProjectItem";
import projImage1 from "../images/e-commerce.png"
import projImage3 from "../images/news-site.png";
import projImage2 from "../images/weather.png";
import projImage4 from "../images/todo.png";

export const projectList=[
    {
        id:1,
        name:"Agri-Dukaan ",
        image:projImage1,
        skills:"ReactJs, NodeJs, BootStrap, MongoDB",
        link:"https://github.com/rkg20/Agri-Dukaan",
    },
    {
        id:2,
        name:"Weather-App",
        image:projImage2,
        skills:"ReactJs, CSS(Media Query)",
        link:"https://github.com/rkg20/Weather-App",

    },
    {
        id:3,
        name:"News-Site",
        image:projImage3,
        skills:"HTML, CSS, JavaScript, MySQL",
        link:"https://github.com/rkg20/news-site",

    },
    {
        id:4,
        name:"Todoie App ",
        image:projImage4,
        skills:" HTML, CSS, JavaScript",
        link:"https://github.com/rkg20/Todoie-App",
    }
];
const Projects=()=>{
    return(
        <div className="projects">
            <h1 className="title">My Personal Projects</h1>
            <div className="projects-list">
                {
                    projectList.map((list,idx)=>{
                    return(
                        <ProjectItem name={list.name} image={list.image} id={idx}/>
                    );
                })
                }
            </div>
        </div>
    );
}
export default Projects;