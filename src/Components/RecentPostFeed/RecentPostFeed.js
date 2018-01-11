import React, { Component } from 'react'
import axios from 'axios'

import './RecentPostFeed.css'

import PostSummary from '../PostSummary/PostSummary'

class RecentPostFeed extends Component {
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
        let sortedPostsByDate = response.data.sort((a, b) => {
          var itemA = a.date
          var itemB = b.date

          return (itemA < itemB) ? -1 : (itemA > itemB) ? 1 : 0
        })
        console.log(sortedPostsByDate)
        this.setState({
          posts: sortedPostsByDate
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    let showPostSummaries = this.state.posts.map((post, key) => {
      return (
        <div key={`post-${key}`}>
          <PostSummary post={post} />
        </div>
      )
    })
    return (
      <div className='recent-post-feed'>
        {showPostSummaries}
      </div>
    )
  }
}

export default RecentPostFeed
