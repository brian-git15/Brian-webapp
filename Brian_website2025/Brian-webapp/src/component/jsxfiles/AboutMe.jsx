import '../styles/AboutMe.css'
import { useState } from 'react'

const AboutMe = ({isHovered}) => {


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
        </div>
    )
}

export default AboutMe