import React from 'react'

import './item.css'

const Item = ({ note: { text, tag }, itemChanged, itemDeleted }) => {
  return (
    <div className="card">
      <div className="card-body" onClick={itemChanged}>
        <div className="closeBtn">
          <button type="button" className="btn" onClick={() => itemDeleted}>
            X
          </button>
        </div>
        <p className="card-text">{text}</p>
        <p id="tag">{tag}</p>
      </div>
    </div>
  )
}

export default Item
