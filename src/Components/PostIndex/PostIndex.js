import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import axios from 'axios'

import './PostIndex.css'

class PostIndex extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  sortPostsAlphabetically (array) {
    let sortedPosts = array.sort((a,b) => {
      var itemA = a.title
      var itemB = b.title

      return (itemA < itemB) ? -1 : (itemA > itemB) ? 1 : 0
    })

    return sortedPosts
  }

  componentDidMount () {
    axios.get('http://localhost:3001/')
      .then(response => {
        console.log(response.data)
        let sortedPosts = response.data.sort((a, b) => {
          var itemA = a.title
          var itemB = b.title

          return (itemA < itemB) ? -1 : (itemA > itemB) ? 1 : 0
        })
        console.log(sortedPosts)
        this.setState({
          posts: sortedPosts
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    let showPosts = this.state.posts.map((post, index) => {
      return (
        <div className={`post-${index}`}>
          <Link to={`/${post.title}`}>{post.title}</Link>
        </div>
      )
    })
    console.log(showPosts)
    return (
      <div className='recipe-index'>
        <h1>All Recipes</h1>
        {showPosts}
      </div>
    )
  }
}

export default PostIndex
