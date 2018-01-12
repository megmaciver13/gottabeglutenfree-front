import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import './Sidebar.css'

import AboutSummary from '../AboutSummary/AboutSummary'
import RecentPostList from '../RecentPostList/RecentPostList'

class Sidebar extends Component {
  render () {
    return (
      <div className='sidebar'>
        <AboutSummary />
        <RecentPostList />
      </div>
    )
  }
}

export default Sidebar
