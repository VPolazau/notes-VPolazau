import React from 'react'
import Item from '../item'

import './item-list.css'

const ItemList = () => {
  const alertMod = () => {
    console.log(123);
  }

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
