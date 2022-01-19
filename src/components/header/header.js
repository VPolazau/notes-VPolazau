import React from 'react'
import SearchPanel from '../search-panel'

import './header.css'

const Header = ({newNoteBtn}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h1> Notes </h1>

        {/* <input
          type="color"
          className="form-control form-control-color"
          id="exampleColorInput"
          value="#563d7c"
          title="Choose your color"
        ></input> */}

        <button type="button" className="btn btn-outline-secondary btn-new-note"
        onClick={newNoteBtn}>
           New note
        </button>

        <SearchPanel />
      </div>
    </nav>
  )
}

export default Header
