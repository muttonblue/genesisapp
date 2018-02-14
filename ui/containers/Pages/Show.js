import React, { Component } from 'react'
import { USERS_ENDPOINT } from '../../constants/endpoints'
import { ShowPage } from '../../components'

export default class ShowPageContainer extends Component {

  state = {
    page: { id: 0 , name: '' }
  }

  shouldComponentUpdate(_nextProps, nextState) {
    return this.state.page !== nextState.page;
  } 

  componentWillMount() {
    fetch(`${USERS_ENDPOINT}?id=${this.props.params.id}`)
    .then((response) => response.json())
    .then(function(page) {
      return ( page && page.length > 0 ) ? page[0] : {id: 0 , name : 'no_name'};
    })
    .then((page) => this.setState({page}))
  }

  // componentDidMount() {
  //   fetch(`${USERS_ENDPOINT}?id=${this.props.params.id}`)
  //     .then((response) => response.json())
  //     .then(function(page) {
  //       return ( page && page.length > 0 ) ? page[0] : {id: 0 , name : 'no_name'};
  //     })
  //     .then((page) => this.setState({page}))
  // } 
  
  render() {
    const { id, name } = this.state.page
    return <ShowPage id={id} name={name} />
  }
}