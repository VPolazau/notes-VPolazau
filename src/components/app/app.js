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

  state = {
    data: this.data,
    dataMod: null,
    modView: false,
  }

  newNote = () => {
    this.setState(() => {
      const _buff = { note: { text: '', tag: '' } }
      return { modView: true, dataMod: _buff }
    })
  }

  onCloseMod = () => {
    this.setState({modView: false})
  }

  modNote = (id) => {
    this.setState(({ data }) => {
      const idx = data.findIndex((el) => el.id === id)

      return { modView: true, dataMod: data[idx] }
    })
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const idx = data.findIndex((el) => el.id === id)

      const newArray = [...data.slice(0, idx), ...data.slice(idx + 1)]

      return { data: newArray }
    })
  }

  render() {
    const { data, modView, dataMod } = this.state

    const modifier = modView ? <Modifier data={dataMod} onCloseMod={this.onCloseMod}/> : null

    return (
      <div className="container">
        <Header newNoteBtn={this.newNote} />

        {modifier}
        <div className="content">
          <ItemList
            data={data}
            onDeleted={this.deleteItem}
            onChanged={this.modNote}
          />
        </div>

        <Footer />
      </div>
    )
  }
}
