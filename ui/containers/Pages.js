import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { USERS_ENDPOINT } from '../constants/endpoints'
import { Pages } from '../components'

export default class PagesContainer extends Component {
  state = {
    pages: []
  }

  onReloadPages = (from) => {
    console.log('call from : ' + from);
    fetch(USERS_ENDPOINT)
      .then((response) => response.json())
      .then((pages) => this.setState({ pages }))
  }

  componentDidMount() { 
   this.onReloadPages('containers');
  }

  render() {
    return (
      <Pages pages={this.state.pages} onReloadPages={this.onReloadPages} />
    )
  }
}
