import '../styles/Navbar.css'
import { useState } from 'react'
import homeIMG from '../../assets/home.jpg'
import contactIMG from "../../assets/contact.jpg"
import projectsIMG from "../../assets/Projects.jpg"

const NavBar = ({ onHover, onLeave}) => {

    return (
        <div class="container" onMouseEnter={onHover} onMouseLeave={onLeave}>
            <ul>
                <div class='Navbtn'> 
                    <a href="#"><img class="btn" src={homeIMG} alt="About Me"></img></a>
                    
                </div>
                <div class='Navbtn'>
                    <a href="#"><img class="btn" src={projectsIMG} alt="Projects"></img></a>
                    
                </div>
                <div class='Navbtn'> 
                    <a href="#"><img class="btn" src={contactIMG} alt="Contact"></img></a>
                    
                </div>
            </ul>
            <ul>
                <div class = 'NavNames'>
                    About Me
                </div>
                <div class = 'NavNames'>
                    <div id='projects'> Projects </div>
                </div>
                <div class = 'NavNames'>
                    Contact
                </div>
            </ul>
        </div>
        
    )
}

export default NavBar