import React from 'react'

import './modifier.css'

const Modifier = ({ data, onCloseMod, saveNote, onChangeText }) => {
    const {
      id,
      note: { text, tag },
    } = data

    return (
      <div className='form-floating'>
        <textarea
          contentEditable='true'
          suppressContentEditableWarning={true}
          className='form-control text-note'
          value={text}
          onChange={e => onChangeText(id, e)}
        ></textarea>

        <div className='modal-footer'>
          <div className='tag-mod'>{tag}</div>

          <div className='btn-mod'>
            <button
              id='save'
              type='button'
              className='btn btn-primary btn-save'
              onClick={() => saveNote(data)}
            >
              Save
            </button>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
              onClick={onCloseMod}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
}

export default Modifier
