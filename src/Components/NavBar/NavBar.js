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
          <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
        </span>
        <span className='about'>
          <Link to='/'style={{ textDecoration: 'none', color: 'white' }}>About</Link>
        </span>
      </nav>
    )
  }
}

export default NavBar
