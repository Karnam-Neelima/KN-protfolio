import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import About from './Components/About/About'
import Education from './Components/Education/Education'
import Project from './Components/Projects/Projects'
import Contacts from './contacts/Contacts'
<li><a href="#education" style={{ textDecoration: 'none', color: 'inherit' }}>Education</a></li>


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Project />
      <Contacts />

    </>
  )
}

export default App
