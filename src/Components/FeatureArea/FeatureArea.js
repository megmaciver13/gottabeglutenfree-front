import React, { Component } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'

import './FeatureArea.css'

import RecentPostFeed from '../RecentPostFeed/RecentPostFeed'
import PostIndex from '../PostIndex/PostIndex'
import PostShow from '../PostShow/PostShow'
import About from '../About/About'
import NewPost from '../NewPost/NewPost'
import EditPost from '../EditPost/EditPost'

class FeatureArea extends Component {
  render () {
    return (
      <div className='feature-area'>
        <Switch>
          <Route
            exact path='/'
            component={RecentPostFeed}
          />
          <Route
            exact path='/posts'
            component={PostIndex}
          />
          <Route
            path='/posts/:title'
            component={PostShow}
          />
          <Route
            path='/about'
            component={About}
          />
          <Route
            path='/new'
            component={NewPost}
          />
          <Route
            path='/edit'
            component={EditPost}
          />
        </Switch>
      </div>
    )
  }
}

export default FeatureArea
