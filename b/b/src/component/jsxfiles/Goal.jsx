import '../styles/Goal.css'
import { useState } from 'react'
import brianimg from '../../assets/Brianimg.webp'

const Goal = ({isHovered}) => {


    return(
        <div className={`goalcontent ${isHovered ? "hovered" : ""}`}>
            <div class="grid">
                <img id="brianimg" src={brianimg}></img>
                <div class="grid-content">
                    <h2>Hello. My name is Brian. I am an undergraduate student at the University of Waterloo for Computer Science.
                        
                    </h2> 
                </div>
            </div>
        </div>
    )
}

export default Goal