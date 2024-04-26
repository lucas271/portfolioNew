import { useState } from 'react'

import Navbar from './components/layout/Navbar'
import Presentation from './components/Presentation'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Tecnologies from './components/Tecnologies'
import ToTop from './components/layout/ToTop'


function App() {

  return (
    <main className="text-bg-dark main-app" style={{minHeight: '100vh'}}>
      <Navbar/>
      <Presentation />
      <Projects/>
      <Tecnologies/>
      <Contact/>
      <ToTop/>
    </main>
  )
}

export default App
