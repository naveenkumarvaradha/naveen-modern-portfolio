import React, { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  const [activeTab, setActiveTab] = useState('about')

  const renderTab = () => {
    switch (activeTab) {
      case 'about':
        return <About />
      case 'skills':
        return <Skills />
      case 'projects':
        return <Projects />
      default:
        return <About />
    }
  }

  return (
    <>
      <Hero />
      <div className="tabs">
        <button onClick={() => setActiveTab('about')} className={activeTab === 'about' ? 'active' : ''}>About</button>
        <button onClick={() => setActiveTab('skills')} className={activeTab === 'skills' ? 'active' : ''}>Skills</button>
        <button onClick={() => setActiveTab('projects')} className={activeTab === 'projects' ? 'active' : ''}>Projects</button>
      </div>
      <div className="tab-content">
        {renderTab()}
      </div>
      <Footer />
    </>
  )
}

export default App
