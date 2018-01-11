import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import './UserBar.css'

class UserBar extends Component {
  render () {
    return (
      <nav className='user-bar'>
        <Link to='/new' className='new-button' style={{ textDecoration: 'none', color: '#566282' }}>+ New Post</Link>
      </nav>
    )
  }
}

export default UserBar
