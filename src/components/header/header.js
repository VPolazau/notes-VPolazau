import React from 'react'
import SearchPanel from '../search-panel'

import './header.css'

const Header = ({newNoteBtn, onSearchChange}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid header-container">
        <h1> Notes </h1>
        <button type="button" className="btn btn-outline-secondary btn-new-note"
        onClick={newNoteBtn}>
           New note
        </button>

        <SearchPanel onSearchChange={onSearchChange}/>
      </div>
    </nav>
  )
}

export default Header
