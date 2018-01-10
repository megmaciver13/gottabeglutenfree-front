import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import './PostSummary.css'

class PostSummary extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: props.post.title,
      dateMonth: props.post.date.substring(5, 7),
      dateNumber: props.post.date.substring(8, 10),
      dateYear: props.post.date.substring(0, 4),
      featuredImage: props.post.featuredImage,
      textPreview: props.post.introText.substring(0, 500)
    }
  }

  render () {
    console.log(this.state)
    return (
      <div className='post-summary'>
        <Link to={`/posts/${this.state.title}`} style={{ textDecoration: 'none', color: 'black' }}>
          <h2>{this.state.title}</h2>
          <h4>{this.state.dateMonth}/{this.state.dateNumber}/{this.state.dateYear}</h4>
          <img src={this.state.featuredImage} alt={this.state.title} />
          <p>{this.state.textPreview}...</p>
          <button>Keep Reading</button>
        </Link>
      </div>
    )
  }
}

export default PostSummary
