import React, { Component } from 'react'
import Service from '../../service/service'
import Item from '../item'

import './item-list.css'

export default class ItemList extends Component {
  colomArr = []
  rowArr = []
  key = null

  service = new Service()
  data = this.service.getData()

  // data[0].note.text = 12312312312
  // console.log(data[0].note.text)

  itemsView = this.data.map((item) => {
    const {
      note: { text, tag },
      id,
    } = item

    const items = (
      <div className="col-lg-4" key={id}>
        <Item text={text} tag={tag} />
      </div>
    )

    this.rowArr.push(items)

    if ((items.key + 1) % 3 === 0 && items.key > '0') {
      const row = (
        <div className="row" key={items.key / 3}>
          {this.rowArr[0]}
          {this.rowArr[1]}
          {this.rowArr[2]}
        </div>
      )
      this.key = items.key
      this.rowArr = []
      return row
    }

    if (this.data.length - 1 - this.key === 2) {
      const row = (
        <div className="row" key={items.key / 3}>
          {this.rowArr[this.key + 1]}
          {this.rowArr[this.key + 2]}
        </div>
      )
      this.rowArr = []
      return row
    }

    if (this.data.length - 1 - this.key === 1) {
      return (
        <div className="row" key={items.key / 3}>
          {this.rowArr[0]}
        </div>
      )
    }
  })

  render() {
    return this.itemsView
  }
}
