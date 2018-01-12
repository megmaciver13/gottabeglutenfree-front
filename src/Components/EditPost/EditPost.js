import React, { Component } from 'react'
import axios from 'axios'

import './EditPost.css'

class EditPost extends Component {
  constructor (props) {
    super(props)

    this.state = {
      post: {
        title: '',
        dateMonth: null,
        dateNumber: null,
        dateYear: null,
        featuredImage: '',
        introText: '',
        additionalImage: '',
        yieldQuantity: '',
        ingredients: [],
        finalImage: '',
        finalText: '',
        directions: []
      }
    }

    this.handleDelete = this.handleDelete.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleStateUpdate = this.handleStateUpdate.bind(this)
    this.handleStateArrayUpdate = this.handleStateArrayUpdate.bind(this)
    this.handleStateArrayOfObjectsUpdate = this.handleStateArrayOfObjectsUpdate.bind(this)
  }

  componentDidMount () {
    axios.get(`http://localhost:3001/posts/${this.props.match.params.title}`)
      .then(response => {
        console.log(response.data)
        var res = response.data
        this.setState({
          post: {
            title: res.title,
            dateMonth: res.date.substring(5, 7),
            dateNumber: res.date.substring(8, 10),
            dateYear: res.date.substring(0, 4),
            featuredImage: res.featuredImage,
            introText: res.introText,
            additionalImage: res.additionalImage,
            yieldQuantity: res.yieldQuantity,
            ingredients: res.ingredients,
            finalImage: res.finalImage,
            finalText: res.finalText,
            directions: res.directions
          }
        })
      })
      .catch(err => console.log(err))
  }

  handleStateUpdate (e) {
    this.setState({
      post: {
        ...this.state.post,
        [e.target.name]: e.target.value
      }
    })
  }

  handleStateArrayUpdate (e) {
    let items = this.state.post[e.target.name]
    items[e.target.index] = e.target.value

    console.log(items)
    this.forceUpdate()
  }

  handleStateArrayOfObjectsUpdate (e) {
    let items = this.state.post[e.target.name]
    items[e.target.index][e.target.type] = e.target.value

    console.log(items)
    this.forceUpdate()
  }

  handleSubmit (e) {
    e.preventDefault()
    axios.put(`http://localhost:3001/posts/${this.props.match.params.title}`, this.state)
      .then(response => {
        console.log(response)
        this.props.history.push(`/posts/${this.state.title}`)
      })
      .catch(err => console.log(err))
  }

  handleDelete (e) {
    e.preventDefault()

    axios.delete(`http://localhost:3001/posts/${this.props.match.params.title}`, {title: this.props.match.params.title})
      .then(() => {
        this.props.history.push('/')
      })
      .catch(err => console.log(err))
  }

  render () {
    let showIngredientInputs = this.state.post.ingredients.map((ingredient, key) => {
      return (
        <div key={key}>
          <input name='ingredients' index={key} defaultValue={ingredient} onChange={e => this.handleStateArrayUpdate(e)} /><br />
        </div>
      )
    })
    let showDirectionInputs = this.state.post.directions.map((direction, key) => {
      return (
        <label>
          Step {key + 1}:
          <input name='directions' index={key} type='text' value={direction.text} onChange={e => this.handleStateArrayOfObjectsUpdate(e)} /><br />
          <input name='directions' index={key} type='imageUrl' value={direction.imageUrl} onChange={e => this.handleStateArrayOfObjectsUpdate(e)} /><br />
        </label>
      )
    })
    return (
      <div className='form-container'>
        <h1>Edit <span className='italics'>{this.props.match.params.title}</span></h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            Post Title: <input name='title' defaultValue={this.state.post.title} onChange={e => this.handleStateUpdate(e)} />
          </label>
          <br />
          <label>
            Featured Image URL: <input name='featuredImage' value={this.state.post.featuredImage} onChange={e => this.handleStateUpdate(e)} />
          </label>
          <br />
          <label>
            Intro Text: <input name='introText' value={this.state.post.introText} onChange={e => this.handleStateUpdate(e)} />
          </label>
          <br />
          <label>
            Additional Image URL: <input name='additionalImage' value={this.state.post.additionalImage} onChange={e => this.handleStateUpdate(e)} />
          </label>
          <br />
          <label>
            Yield Quantity: <input name='yieldQuantity' value={this.state.post.yieldQuantity} onChange={e => this.handleStateUpdate(e)} />
          </label>
          <br />
          <label>
            Ingredients: {showIngredientInputs}
          </label>
          <label>
            Final Image URL: <input name='finalImage' value={this.state.post.finalImage} onChange={e => this.handleStateUpdate(e)} />
          </label>
          <br />
          <label>
            Final Text: <input name='finalText' value={this.state.post.finalText} onChange={e => this.handleStateUpdate(e)} />
          </label>
          <br />
          <label>
            Directions: <br />
            {showDirectionInputs}
          </label>
          <br />
          <input type='submit' value='Update Post' className='submit-button' />
        </form>
        <br />
        <input type='submit' value='Delete' className='submit-button' onClick={e => this.handleDelete(e)} />
      </div>
    )
  }
}

export default EditPost
