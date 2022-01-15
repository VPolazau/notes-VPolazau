import react from 'react'

import './item.css'

const Item = () => {
  const arr = '#qwerty#qwerty'

  return (
    <div className="col-lg-4">
      <div className="card">
        <div className="card-body">
          <button type="button" className="btn-close clos "></button>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p id='tag'>{arr}</p>
        </div>
      </div>
    </div>
  )
}

export default Item
