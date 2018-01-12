import React, {Component} from 'react'
import {
  Link
} from 'react-router-dom'
import axios from 'axios'

import './RecentPostList.css'

class RecentPostList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount () {
    axios.get('https://gottabeglutenfree.herokuapp.com/posts')
      .then(response => {
        console.log(response.data)
        let sortedPostsByDate = response.data.sort((a, b) => {
          var itemA = a.date
          var itemB = b.date

          return (itemA > itemB) ? -1 : (itemA < itemB) ? 1 : 0
        })
        console.log(sortedPostsByDate)
        this.setState({
          posts: sortedPostsByDate
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
      <div className='recent-post-list'>
        <h3>Recent Posts</h3>
        {listAllPosts}
      </div>
    )
  }
}

export default RecentPostList
