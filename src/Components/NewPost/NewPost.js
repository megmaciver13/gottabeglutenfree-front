import React, { Component } from 'react'
import axios from 'axios'

import './NewPost.css'

class NewPost extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      featuredImage: '',
      introText: '',
      additionalImage: '',
      yieldQuantity: '',
      ingredients: [],
      finalImage: '',
      finalText: '',
      directions: []
    }

    this.handleStateUpdate = this.handleStateUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleStateUpdate (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    axios.post(`http://localhost:3001/posts/${this.state.title}`, this.state)
      .then(response => {
        console.log(response)
        this.props.history.push(`/${this.state.title}`)
      })
      .catch(err => console.log(err))
  }

  render () {
    console.log(this.state)
    return (
      <div className='form-container'>
        <h1>New Post</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            Post Title: <input name='title' placeholder='new title' onChange={e => this.handleStateUpdate(e)} />
          </label>
          <br />
          <label>
            Featured Image URL: <input name='featuredImage' placeholder='new featured image' onChange={e => this.handleStateUpdate(e)} />
          </label>
          <br />
          <label>
            Intro Text: <input name='introText' placeholder='new intro text' onChange={e => this.handleStateUpdate(e)} />
          </label>
          <br />
          <label>
            Additional Image URL (before ingredients): <input name='additionalImage' placeholder='new additional image' onChange={e => this.handleStateUpdate(e)} />
          </label>
          <br />
          <label>
            Yield Quantity: <input name='yieldQuantity' placeholder='new yield quantity' onChange={e => this.handleStateUpdate(e)} />
          </label>
          <br />
          {/* Ingredients: <input name='ingredients' onChange={e => this.handleStateUpdate} /><br /> */}
          <br />
          <label>
            Final Image URL: <input name='finalImage' placeholder='new final image' onChange={e => this.handleStateUpdate(e)} />
          </label>
          <br />
          <label>
            Final Text: <input name='finalText' placeholder='new final text' onChange={e => this.handleStateUpdate(e)} />
          </label>
          <br />
          {/* Directions: <input name='directions' onChange={e => this.handleStateUpdate} /><br /> */}
          <br />
          <input type='submit' value='Create New Post' className='submit-button' />
        </form>
      </div>
    )
  }
}

export default NewPost
