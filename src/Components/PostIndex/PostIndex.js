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

  componentDidMount () {
    axios.get('http://localhost:3001/posts')
      .then(response => {
        console.log(response.data)
        let sortedPostsAlphabetically = response.data.sort((a, b) => {
          var itemA = a.title
          var itemB = b.title

          return (itemA < itemB) ? -1 : (itemA > itemB) ? 1 : 0
        })
        console.log(sortedPostsAlphabetically)
        this.setState({
          posts: sortedPostsAlphabetically
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    let listAllPosts = this.state.posts.map((post, index) => {
      return (
        <div className={`post-${index}`}>
          <Link to={`/${post.title}`}>{post.title}</Link>
        </div>
      )
    })
    return (
      <div className='recipe-index'>
        <h1>All Recipes</h1>
        {listAllPosts}
      </div>
    )
  }
}

export default PostIndex
