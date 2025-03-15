import '../styles/AboutMe.css'
import { useEffect, useState } from 'react'
import {Outlet, Link} from "react-router-dom";

const AboutMe = ({isHovered}) => {

    useEffect(() => {
        fetch("http://127.0.0.1:5000/api/hello")
        .then(response => response.json())
        .then(data => console.log(data.message))
        .catch(error => console.log("THERE WAS AN ERROR!: ", error));
    },[])

    return(
        <div className={`content ${isHovered ? "hovered" : ""}`}>
            <div class='title'>
                <div class='titletext'>
                    BRIAN SU
                    <div id='se'>
                        CS@UWATERLOO
                    </div>
                </div>
                {/*<div class="circle" id="contentcircle"></div>
                <div class="circle" id="innercircle"></div>*/}
                
            </div>
            <div class="socials">
                <ul>
                    {/* <Link to="/extrapage">EXTRAS</Link> */}
                    <a href="b33su@uwaterloo.ca" class='socialbtn'> b33su@uwaterloo.ca </a> |
                    <a href="https://linkedin.com/in/brian-su-70990a24a/" class='socialbtn'> linkedin.com/in/brian-su-70990a24a/ </a> |
                    <a href="https://github.com/brian-git15" class='socialbtn'> github.com/brian-git15 </a>
                </ul>
            </div>
        </div>
    )
}

export default AboutMe;