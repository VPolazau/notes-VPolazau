import React, { Component } from 'react'
import Footer from '../footer'
import Header from '../header'
import ItemList from '../item-list'

import 'bootswatch/dist/sketchy/bootstrap.css'

import './app.css'


const App = () => {
  return (
    <div className="container">
      <Header />

      <ItemList />

      <Footer />
    </div>
  )
}

export default App
