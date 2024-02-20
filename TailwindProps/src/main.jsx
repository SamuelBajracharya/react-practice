import React from 'react'
import ReactDOM from 'react-dom/client'
import Component from './PropsDemo.jsx'
import PropDemo from './Props.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Component name="Leonel Messi" desc="Professional Footballer" />
    <Component name="Messi Leonel" desc="Football Captain" />
    <PropDemo heading="This is a heading" />
  </React.StrictMode>,
)
