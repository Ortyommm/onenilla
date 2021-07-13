import React from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Status from './components/Status/Status'
import Play from './components/Play/Play'

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <About />
        <Status />
        <Play />
      </div>
    </>
  )
}

export default App
