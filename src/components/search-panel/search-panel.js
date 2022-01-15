import React from 'react'

import './search-panel.css'

const SearchPanel = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav me-auto">
        <li className="nav-item"></li>
      </ul>
      <form className="d-flex">
        <input
          className="form-control me-sm-2"
          type="text"
          placeholder="enter tag"
        ></input>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchPanel
