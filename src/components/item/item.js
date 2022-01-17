import React from 'react'

import './item.css'

const Item = ({ text, tag }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <button type='button' className='btn-close'></button>
        <p className='card-text'>{text}</p>
        <p id='tag'>{tag}</p>
      </div>
    </div>
  )
}

export default Item
