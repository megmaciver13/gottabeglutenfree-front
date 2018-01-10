import React, { Component } from 'react'

import './App.css'

import TitleLogo from '../TitleLogo/TitleLogo'
import NavBar from '../NavBar/NavBar'
import FeatureArea from '../FeatureArea/FeatureArea'
import Sidebar from '../Sidebar/Sidebar'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <div className='title-logo'>
          <TitleLogo />
        </div>
        <NavBar />
        <div className='main'>
          <div className='feature-area'>
            <FeatureArea />
          </div>
          <div className='sidebar'>
            <Sidebar />
          </div>
        </div>
      </div>
    )
  }
}

export default App
