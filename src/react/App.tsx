import React from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Status from './components/Status/Status'
import Play from './components/Play/Play'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <div className="container">
          <About />
          <Status />
          <Play />
        </div>
      </Provider>
    </>
  )
}

export default App
