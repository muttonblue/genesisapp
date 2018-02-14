import React, { Component } from 'react'
import PropTypes from 'prop-types' 
 
export default class Me extends Component {
  
  static propTypes = {
    name: PropTypes.string.isRequired
  } 

  render() {
      const { name } = this.props
      return (
        <h2> {name} </h2>
      )
    }
  } 