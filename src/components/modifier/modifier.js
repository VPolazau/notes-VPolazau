import React from 'react'

import './modifier.css'

const Modifier = ({data}) => {
  const {id, note: {text, tag}} = data;
  return (
    <div className="form-floating">
      <textarea className="form-control" value={text}></textarea>

      <div className="modal-footer">
        <div className="tag-mod">{tag}</div>

        <div className="btn-mod">
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modifier
