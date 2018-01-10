import React, { Component } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'

import './FeatureArea.css'

import RecentPostFeed from '../RecentPostFeed/RecentPostFeed'
import PostIndex from '../PostIndex/PostIndex'
import PostShow from '../PostShow/PostShow'

class FeatureArea extends Component {
  render () {
    return (
      <div className='feature-area'>
        <Switch>
          <Route
            exact path='/'
            render={props => <RecentPostFeed {...props} />}
          />
          <Route
            exact path='/posts'
            component={PostIndex}
          />
          <Route
            path='/posts/:title'
            render={props => <PostShow {...props} />}
          />
        </Switch>
      </div>
    )
  }
}

export default FeatureArea
