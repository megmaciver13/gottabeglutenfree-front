import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import './NavBar.css'

class NavBar extends Component {
  render () {
    return (
      <nav>
        <span className='home'>
          <Link to='/'>Home</Link>
        </span>
        <span className='about'>
          <Link to='/'>About</Link>
        </span>
      </nav>
    )
  }
}

export default NavBar
