import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './page/header/header'
import Body from './page/body/body'
import Footer from './page/footer/footer'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Body/>
    <Footer/>
  </React.StrictMode>
)
