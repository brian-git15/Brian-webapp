import { useState } from 'react'
import '../styles/HomePage.css'
import Bg from './Bg'
import NavBar from './Navbar'
import AboutMe from './AboutMe'
import Proj from "./Proj"
import { Outlet, Link } from "react-router-dom";

function HomePage() {
    const [hover,setHover] = useState(false)
  return (
    <div>
      <Bg/>
      <NavBar onHover={() => setHover(true)} onLeave={() => setHover(false)} />
      <AboutMe isHovered={hover}/>
      <Proj/>
    </div>
  )
}

export default HomePage;
