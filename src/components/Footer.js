import React from "react";
import "./Footer.css";
import LinkedinIcon  from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import  InstagramIcon  from "@material-ui/icons/Instagram";

const Footer=()=>{
    return(
        <div className="footer">
            <div className="social-media">
                <a href="https://www.instagram.com/___rahul_g/" alt="" target="_blank" rel="noreferrer"><InstagramIcon /></a>
                <a href="https://m.facebook.com/" alt="" target="_blank" rel="noreferrer"><FacebookIcon /></a>
                <a href="https://www.linkedin.com/in/rahul-gupta-37021a16b/" alt="" target="_blank" rel="noreferrer"><LinkedinIcon/> </a>
            </div>
        </div>
    );
}
export default Footer;