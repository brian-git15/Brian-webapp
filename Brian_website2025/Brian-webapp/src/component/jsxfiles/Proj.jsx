import '../styles/Proj.css'
import { useState } from 'react'
import fmmsb from "../../assets/fmmstudybankss.jpg"
import MemoryLanePic from "../../assets/memorylaneprompt.png"

const Proj = ({isHovered}) => {


    return(
        <div className={`projgal ${isHovered ? "hovered" : ""}`}>
            <div class="gallery">
                <ul>
                    <div class="displaycase"> {/** display case is two by two, project is inidividual things */}
                        <h1>Projects</h1>
                        <div class="projectcase">
                            <div class="project">
                                <a href="https://fmmstudybank.w3spaces.com/index.html" > 
                                    <img src={fmmsb} width="120%"></img>
                                </a>
                            </div>
                            <div class="projectdesc">
                            FMM homework club study bank | HTML, CSS, JS <br /><br />

                            • Created and launched a website hosting a database using HTML,CSS,JS, of academic and IB study notes for high
                            school students<br /><br />
                            • Improved accessibility with mobile devices and provided regular updates based on consumer and the club's demands
                            </div>
                        </div>
                        <div class="projectcase">
                            <div class="project">
                                <a href="https://www.atripdownmemorylane.co/"> 
                                    <img src={MemoryLanePic} width="100%"></img>
                                </a>
                            </div>
                            <div class="projectdesc">
                                Memory Lane - Dementia Therepy | Python, Tailwind CSS, React <br /><br />

                                • Integrated speech to text API endpoint in python in record time as a part of the 2025 QHacks Hackathon
                                <br /><br />
                                • Collaborated in development of the front-end of a UI designed for dementia patients, using Tailwind CSS and
                                React to make essential adjustments, including graphics animations
                                <br /><br />
                                <a href="https://github.com/juan-josue/memory-lane"> 
                                    Github
                                </a>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Proj