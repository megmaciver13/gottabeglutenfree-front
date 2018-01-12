import React, { Component } from 'react'
import axios from 'axios'

import './NewPost.css'

class NewPost extends Component {
  constructor (props) {
    super(props)

    this.state = {
      post: {
        title: '',
        featuredImage: '',
        introText: '',
        additionalImage: '',
        yieldQuantity: '',
        ingredients: [],
        finalImage: '',
        finalText: '',
        directions: []
      },

    }

    this.handleStateUpdate = this.handleStateUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  addIngredientInput () {

  }

  addDirectionInput () {

  }

  handleStateUpdate (e) {
    this.setState({
      post: {
        ...this.state.post,
        [e.target.name]: e.target.value
      }
    })
  }

  handleArrayStateUpdate (e) {
    this.setState({
      post: {
        ...this.state.post,
        [e.target.name]: [...this.state.post[e.target.name], e.target.value]
      }
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    if (this.state.post.title.length >= 1) {
      axios.post(`http://localhost:3001/posts`, this.state.post)
        .then(response => {
          console.log(response)
          this.props.history.push(`/posts/${this.state.post.title}`)
        })
        .catch(err => console.log(err))
    } else {
      window.alert('Post must have a title!')
    }
  }

  render () {
    console.log(this.state)
    return (
      <div className='form-container'>
        <h1>New Post</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            Post Title: <input name='title' placeholder='Title' onChange={e => this.handleStateUpdate(e)} />
          </label>
          <br />
          <label>
            Featured Image URL: <input name='featuredImage' placeholder='URL' onChange={e => this.handleStateUpdate(e)} />
          </label>
          <br />
          <label>
            Intro Text: <input name='introText' placeholder='Intro Text' onChange={e => this.handleStateUpdate(e)} />
          </label>
          <br />
          <label>
            Post-Intro Image URL: <input name='additionalImage' placeholder='URL' onChange={e => this.handleStateUpdate(e)} />
          </label>
          <br />
          <label>
            Yield Quantity: <input name='yieldQuantity' placeholder='Recipe Yield' onChange={e => this.handleStateUpdate(e)} />
          </label>
          <br />
          {/* <label>
            Ingredients: <input name='post[ingredients]' placeholder='Ingredient' onChange={e => this.handleArrayStateUpdate(e)} />
            <button onChange={() => this.addIngredientInput()}>Add New Ingredient</button>
          </label> */}
          <br />
          <label>
            Final Image URL: <input name='finalImage' placeholder='URL' onChange={e => this.handleStateUpdate(e)} />
          </label>
          <br />
          <label>
            Final Text: <input name='finalText' placeholder='Final Text' onChange={e => this.handleStateUpdate(e)} />
          </label>
          <br />
          {/* <label>
            Directions: <input name='post[directions]' placeholder='One Step At a Time' onChange={e => this.handleArrayStateUpdate(e)} />
            <button onChange={() => this.addDirectionInput()}>Add New Direction</button>
          </label> */}
          <br />
          <input type='submit' value='Create New Post' className='submit-button' />
        </form>
      </div>
    )
  }
}

export default NewPost
