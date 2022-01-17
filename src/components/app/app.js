import React, { Component } from 'react'
import Footer from '../footer'
import Header from '../header'
import ItemList from '../item-list'
import Modifier from '../modifier'
import Service from '../../service/service'

import 'bootswatch/dist/sketchy/bootstrap.css'

import './app.css'


export default class App extends Component {

  service = new Service()
  data = this.service.getData()

  state={
    data: this.data,
    newItem: false,
  }


  render(){
    const { data } = this.state;

    return (
      <div className="container">
        <Header />
  
        <Modifier />
        <div className="content">
          <ItemList data={data}/>
        </div>
  
        <Footer />
      </div>
    )
  }

  
}

