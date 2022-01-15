import React from 'react'
import Item from '../item'

import './item-list.css'

const ItemList = () => {
  return (
    <div>
      <div className="row">
        <Item />
        <Item />
        <Item />
      </div>
      <div className="row">
        <Item />
        <Item />
        <Item />
      </div>
      <div className="row">
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
}


export default ItemList
