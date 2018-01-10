import React, { Component } from 'react'

import './App.css'

import HeaderLogo from '../HeaderLogo/HeaderLogo'
import NavBar from '../NavBar/NavBar'
import FeatureArea from '../FeatureArea/FeatureArea'
import Sidebar from '../Sidebar/Sidebar'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <HeaderLogo />
        <NavBar />
        <div className='main'>
          <FeatureArea />
          <Sidebar />
        </div>
      </div>
    )
  }
}

export default App
