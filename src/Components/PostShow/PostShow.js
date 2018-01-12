import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import axios from 'axios'

import './PostShow.css'

class PostShow extends Component {
  constructor (props) {
    super(props)

    this.state = {
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

  componentDidMount () {
    axios.get(`https://gottabeglutenfree.herokuapp.com/posts/${this.props.match.params.title}`)
      .then(response => {
        console.log(response.data)
        var res = response.data
        this.setState({
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
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    console.log(this.state.directions)
    let showIngredients = this.state.ingredients.map((ingredient, key) => {
      return (
        <li key={key}>{ingredient}</li>
      )
    })
    let showDirections = this.state.directions.map((direction, key) => {
      console.log(direction)
      return (
        <div key={key} className='direction'>
          <img src={direction.imageUrl} alt={direction.text} className='post-images' />
          <p>{direction.text}</p>
        </div>
      )
    })
    return (
      <div className='post-show'>
        <div className='edit'>
          <Link to={`/posts/${this.state.title}/edit`} className='edit-button' style={{ textDecoration: 'none', color: '#566282' }}><i class="fa fa-pencil" aria-hidden="true" />Edit Post</Link>
        </div>
        <h1>{this.state.title}</h1>
        <h4>{this.state.dateMonth}/{this.state.dateNumber}/{this.state.dateYear}</h4>
        <img src={this.state.featuredImage} alt={this.state.title} className='post-images' />
        <p>{this.state.introText}</p>
        <img src={this.state.additionalImage} alt={this.state.title} className='post-images' />
        <br />
        <br />
        <hr />
        <h3>Ingredients</h3>
        <p><span className='yield'>yields {this.state.yieldQuantity}</span></p>
        <ul>
          {showIngredients}
        </ul>
        <div className='direction-list'>
          {showDirections}
        </div>
        <br />
        <hr />
        <br />
        <img src={this.state.finalImage} alt='final shot' className='post-images' />
        <p>{this.state.finalText}</p>
      </div>
    )
  }
}

export default PostShow
