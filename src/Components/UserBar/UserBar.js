import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import './UserBar.css'

class UserBar extends Component {
  render () {
    return (
      <nav>
        <span>
          <Link to='/'>All Posts</Link>
          <Link to='/'>New Post</Link>
        </span>
      </nav>
    )
  }
}

export default UserBar
