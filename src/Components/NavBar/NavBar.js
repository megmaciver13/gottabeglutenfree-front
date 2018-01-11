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
        </span> |
        <span className='about'>
          <Link to='/about'style={{ textDecoration: 'none', color: 'white' }}>About Me</Link>
        </span> |
        <span className='all'>
          <Link to='/posts'style={{ textDecoration: 'none', color: 'white' }}>Recipe Archive</Link>
        </span>
      </nav>
    )
  }
}

export default NavBar
