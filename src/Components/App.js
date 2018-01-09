import React, { Component } from 'react'
import {
  Link,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import './App.css'

// import TitleLogo, NavBar, FeatureArea, Sidebar

class App extends Component {
  render () {
    return (
      <div className="app">
        <div className="header">
          //TitleLogo
          //NavBar
        </div>
        <div className="main">
          //FeatureArea
          //Sidebar
        </div>
      </div>
    )
  }
}

export default App
