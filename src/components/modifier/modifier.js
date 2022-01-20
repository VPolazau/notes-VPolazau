import React, { Component } from 'react'

import './modifier.css'

export default class Modifier extends Component {
  state = {
    visibleText: ''
  }

  // onClickText = text => {
  //   this.setState(() => {
  //     if (text.indexOf('#') > -1) {
  //       const visibleText = text.split("#").join("")
  //       return {visibleText}
  //     }
  //   })
  // }

  render() {
    const { data, onCloseMod, saveNote, onChangeText } = this.props

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
          // onClick={this.onClickText(text)}
          onChange={e => onChangeText(id, e)}
        ></textarea>

        <div className='modal-footer'>
          <div className='tag-mod'>{tag}</div>

          <div className='btn-mod'>
            <button
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
}
