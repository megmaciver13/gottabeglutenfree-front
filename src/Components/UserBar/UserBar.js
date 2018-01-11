import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import './UserBar.css'

class UserBar extends Component {
  render () {
    return (
      <nav className='user-bar'>
        <span>
          <Link to='/new' className='all-button' style={{ textDecoration: 'none', color: '#566282' }}>All Posts</Link>
          <Link to='/edit' className='new-button' style={{ textDecoration: 'none', color: '#566282' }}>+ New Post</Link>
        </span>
      </nav>
    )
  }
}

export default UserBar
