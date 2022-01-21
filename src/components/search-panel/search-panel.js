import React, { Component } from 'react'

import './search-panel.css'

export default class SearchPanel extends Component {
  state = {
    term: '',
  }

  onSearchChange = e => {
    const term = e.target.value.toLowerCase()
    this.setState({ term })
    this.props.onSearchChange(term)
  }

  render() {
    return (
      <div className='collapse navbar-collapse' id='navbarColor03'>
        <ul className='navbar-nav me-auto'></ul>
        <form className='d-flex input-tag'>
          <input
            className='form-control me-sm-2'
            type='text'
            placeholder='enter tag'
            value={this.state.term}
            onChange={this.onSearchChange}
          ></input>
        </form>
      </div>
    )
  }
}
