import React from 'react'
import ReactDOM from 'react-dom'
import './js/polyfills/IntersectionObserver'

/* import 'raf/polyfill'; */ import './css/index.css'
import './scss/index.scss'
import App from './react/App'
if (module.hot) {
  console.clear()
  module.hot.accept()
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

//TODO optimize Photo
