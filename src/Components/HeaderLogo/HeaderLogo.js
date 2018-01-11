import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import './HeaderLogo.css'

class HeaderLogo extends Component {
  render () {
    return (
      <div className='header'>
        <Link to='/'>
          <img src={require(`../../images/gottabeglutenfree-logo.png`)} alt='gottabeglutenfree-logo' />
        </Link>
        <h4 className='tagline'>a celebration of delicious food sans gluten.</h4>
      </div>
    )
  }
}

export default HeaderLogo
