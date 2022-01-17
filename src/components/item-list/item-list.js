import React, { Component } from 'react'
// import Service from '../../service/service'
import Item from '../item'

import './item-list.css'

export default class ItemList extends Component {
  rowArr = []
  memberKey = null

  state = {
    data: []
  }

  itemChangeList = (id) => {
    console.log(id)
  }

  itemDeleteList = (id) => {
    const idx = this.props.data.findIndex((el) => el.id === id)
    console.log(idx)
  }

  render() {
    const { data } = this.props

    let rowKey = 0
    const size = 3
    const rowArray = []
    for (let i = 0; i < Math.ceil(data.length / size); i++) {
      rowArray[i] = data.slice(i * size, i * size + size)
    }
    
    const itemses = rowArray.map(row => {
      const items = row.map(bundle => {
        const {id, itemProps} = bundle
        return (
          <div className="col-lg-4" key={id}>
          <Item
            {...itemProps}
            itemChange={() => this.itemChangeList(id)}
            itemDelete={() => this.itemDeleteList(id)}
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
    console.log(itemses);

    // this.setState(({data}) => {
    //   const newData = [...data, itemses]
    //   return { data: newData }
    // })

    // console.log(this.state.data);

    const itemsView = data.map((item) => {
      const { id, ...itemProps } = item

      const items = (
        <div className="col-lg-4" key={id}>
          <Item
            {...itemProps}
            itemChange={() => this.itemChangeList(id)}
            itemDelete={() => this.itemDeleteList(id)}
          />
        </div>
      )

      this.rowArr.push(items)

      if ((items.key + 1) % 3 === 0 && items.key > '0') {
        const row = (
          <div className="row" key={id}>
            {this.rowArr.map((row) => row)}
          </div>
        )
        this.memberKey = items.key
        this.rowArr = []
        return row
      }

      if (data.length - 1 - this.memberKey < 3) {
        if (data.length - items.key === 2) return null
        return (
          <div className="row" key={id}>
            {this.rowArr.map((row) => row)}
          </div>
        )
      }
    })

    
    console.log(itemsView);
    return itemses
  }
}
