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
    this.setState(({ data }) => {
      const lastIdx = data.length
      const _buff = {
        id: lastIdx,
        note: { text: 'Is being created...', tag: '' },
      }
      const _bufForMod = { id: lastIdx, note: { text: '', tag: '' } }

      return { modView: true, data: [_buff, ...data], dataMod: _bufForMod }
    })
  }

  onChangeText = (id, event) => {
    this.setState(({ data }) => {
      const idx = data.findIndex((el) => el.id === id)
      const newValue = {
        id: id,
        note: { text: event.target.value, tag: data[idx].note.tag },
      }

      return { dataMod: newValue }
    })
  }

  saveNote = (newDataMod) => {
    this.setState(({ data }) => {
      const idx = data.findIndex((el) => el.id === newDataMod.id)

      const newArray = [...data.slice(0, idx), newDataMod, ...data.slice(idx + 1)]

      return {data: newArray, modView: false}
    })
  }

  onCloseMod = () => {
    this.setState({ modView: false })
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

    const modifier = modView ? (
      <Modifier
        data={dataMod}
        onCloseMod={this.onCloseMod}
        saveNote={this.saveNote}
        onChangeText={this.onChangeText}
      />
    ) : null

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
