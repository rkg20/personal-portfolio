import React from "react";
import {VerticalTimeline,
    VerticalTimelineElement
    } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from '@material-ui/icons/Work';
const Experience=()=>{
    return(
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education"
                    date="2014-2015"
                    iconStyle={{background:"#3e497a", color:"black"}}
                    icon={<SchoolIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Rameshwar High School, Rajnagar</h3>
                    <p>High School</p>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2015-2018"
                    iconStyle={{background:"#3e497a",color:"black"}}
                    icon={<SchoolIcon/>}    
                >
                    <h3 className="vertical-timeline-element-title">Ram Krishna College, Madhubani</h3>
                    <p>Intermediate School</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2018-2022"
                    iconStyle={{background:"#3e497a",color:"#black"}}
                    icon={<SchoolIcon/>}    
                >
                    <h3 className="vertical-timeline-element-title">Academy of Technology, Hooghly</h3>
                    <p>Computer Science</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="January 2022 - July 2022"
                    iconStyle={{background:"#3e497a",color:"#fff"}}
                    icon={<WorkIcon/>}
                >
                    <h3>Cognizant Technology Solutions</h3>
                    <p>Programmer Analyst Trainee</p>
                </VerticalTimelineElement>
                
            </VerticalTimeline>
        </div>
    );
}
export default Experience;