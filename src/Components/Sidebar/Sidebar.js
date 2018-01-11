import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import './Sidebar.css'

import AboutSummary from '../AboutSummary/AboutSummary'

class Sidebar extends Component {
  render () {
    return (
      <div className='sidebar'>
        <AboutSummary />
      </div>
    )
  }
}

export default Sidebar
