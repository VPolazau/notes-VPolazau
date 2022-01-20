import React from 'react'

import './item.css'

const Item = ({ note: { text, tag }, onDeleted, onChanged }) => {
  const _re = /[^#]*/gm
  const modText = text.match(_re).join('')
  const itemText =
    modText.length > 45 ? `${modText.slice(0, 45)}...` : modText

  return (
    <div className='card'>
      <div className='card-body'>
        <div className='closeBtn'>
          <button type='button' className='btn' onClick={onDeleted}>
            X
          </button>
        </div>
        <a href='#top' className='note'>
          <p className='card-text' onClick={onChanged}>
            {itemText}
          </p>
        </a>
        <p id='tag'>{tag}</p>
      </div>
    </div>
  )
}

export default Item
