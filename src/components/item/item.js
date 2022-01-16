import React from 'react'

import './item.css'

const Item = () => {
  const arr = '#qwerty#qwerty#qwerty'

  return (
    <div className="col-lg-4">
      <div className="card">
        <div className="card-body">
          <button type="button" className="btn-close"></button>
          <p className="card-text">
            Some quick example text...
          </p>
          <p id='tag'>{arr}</p>
        </div>
      </div>
    </div>
  )
}

export default Item
