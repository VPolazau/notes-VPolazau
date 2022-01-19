import React, { Component } from 'react'
import Item from '../item'

import './item-list.css'

export default class ItemList extends Component {
  rowArr = []
  memberKey = null

  state = {
    data: [],
  }

  render() {
    const { data, onDeleted, onChanged } = this.props

    let rowKey = 0
    const _size = 3
    const rowArray = []
    for (let i = 0; i < Math.ceil(data.length / _size); i++) {
      rowArray[i] = data.slice(i * _size, i * _size + _size)
    }

    const itemsView = rowArray.map(row => {
      const items = row.map(bundle => {
        const {id, ...itemProps} = bundle
        return (
          <div className="col-lg-4" key={id}>
          <Item
            {...itemProps}
            onChanged={() => onChanged(id)}
            onDeleted={() => onDeleted(id)}
          />
        </div>
        )
      })

      return (
        <div className="row" key={rowKey++}>
          {items}
        </div>
      )
    })

    return itemsView
  }
}
