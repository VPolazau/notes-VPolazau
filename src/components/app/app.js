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
    term: '',
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

      if (data[0].note.text === 'Is being created...') {
        return {
          modView: false,
          data: [...data.slice(1)],
        }
      }
      return {
        modView: true,
        data: [_buff, ...data],
        dataMod: _bufForMod,
      }
    })
  }

  onChangeText = (id, event) => {
    const { value } = event.target
    const _re = /\#([\w|а-я]*)/gm
    const tags = value.toLowerCase().match(_re)

    this.setState(() => {
      const newValue = {
        id: id,
        note: { text: value, tag: tags },
      }

      return { dataMod: newValue }
    })
  }

  saveNote = (newDataMod) => {
    this.setState(({ data }) => {
      const idx = data.findIndex((el) => el.id === newDataMod.id)

      const newArray = [
        ...data.slice(0, idx),
        newDataMod,
        ...data.slice(idx + 1),
      ]

      // this.saveData(newArray, 'data.json', '../../data/data.json')
      this.saveData(newArray)

      return { data: newArray, modView: false }
    })
  }

  onCloseMod = () => {
    this.setState(({ data }) => {
      if (data[0].note.text === 'Is being created...') {
        const oldData = [...data.slice(1)]
        return { data: oldData, modView: false }
      }
      return { modView: false }
    })
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

  onSearchChange = (term) => {
    this.setState({ term })
  }

  search(items, term) {
    if (term.length === 0) {
      return items
    }
    return items.filter((item) => {
      return item.note.tag.join('').indexOf(term) > -1
    })
  }

  saveData = (data) => {
    const dataStr = JSON.stringify(data)
    const _re = /[^#]*/gm
    const dataStrSharp = `{"notes":${dataStr.match(_re).join('')}}`

    var val = dataStr
    if (dataStr === undefined) {
      val = ''
    }
    const download = document.createElement('a')
    download.href =
      'data:text/plain;content-disposition=attachment;filename=file,' + dataStrSharp
    download.download = 'data.json'
    download.style.display = 'none'
    download.id = 'download'
    document.body.appendChild(download)
    document.getElementById('download').click()
    document.body.removeChild(download)

    // 1ый способ не работает
    //
    // const a = document.getElementById("save");
    // const file = new Blob([dataStr], {type: type});
    // a.href = URL.createObjectURL(file);
    // a.download = name;

    // 2ой способ тоже не вышел
    //
    // const fs = require('fs')
    // fs.writeFile('data.json', dataStr, (err) => {
    //   if (err) throw err
    // })
  }

  render() {
    const { data, modView, dataMod, term } = this.state

    const visibleNotes = this.search(data, term)

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
        <Header
          newNoteBtn={this.newNote}
          onSearchChange={this.onSearchChange}
        />

        {modifier}
        <div className="content">
          <ItemList
            data={visibleNotes}
            onDeleted={this.deleteItem}
            onChanged={this.modNote}
          />
        </div>

        <Footer />
      </div>
    )
  }
}
