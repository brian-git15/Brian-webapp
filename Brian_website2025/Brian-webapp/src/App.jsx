import { useState } from 'react'
import './App.css'
import Bg from './component/jsxfiles/Bg'
import NavBar from './component/jsxfiles/Navbar'
import AboutMe from './component/jsxfiles/AboutMe'
import Goal from "./component/jsxfiles/Goal"
import Proj from "./component/jsxfiles/Proj"
import boralis2 from "./assets/boralis2.webp"

function App() {
    const [hover,setHover] = useState(false)

  return (
    <div>
      <Bg/>
      <NavBar onHover={() => setHover(true)} onLeave={() => setHover(false)} />
      <AboutMe isHovered={hover}/>
      <Proj/>
      {/*<Goal/>
      <Proj/>*/}
    </div>
  )
}

export default App
