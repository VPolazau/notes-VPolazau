import React from 'react'

import './item.css'

const Item = ({ note: { text, tag }, onDeleted, onChanged }) => {
  return (
    <a href='#top'>
      <div className='card'>
        <div className='card-body' onClick={onChanged}>
          <div className='closeBtn'>
            <button type='button' className='btn' onClick={onDeleted}>
              X
            </button>
          </div>
          <p className='card-text'>{text}</p>
          <p id='tag'>{tag}</p>
        </div>
      </div>
    </a>
  )
}

export default Item
