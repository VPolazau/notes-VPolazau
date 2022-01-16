import React, { Component } from 'react'
import Footer from '../footer'
import Header from '../header'
import ItemList from '../item-list'
import Modifier from '../modifier'

import 'bootswatch/dist/sketchy/bootstrap.css'

import './app.css'

const App = () => {

  return (
    <div className="container">
      <Header />

      <Modifier />
      <div className="content">
        <ItemList />
      </div>

      <Footer />
    </div>
  )
}

export default App
