import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserAC } from '../../actions/show'
import { ShowPage } from '../../components'

class ShowPageContainer extends Component {

  shouldComponentUpdate(_nextProps, nextState) {
    return this.props.user !== nextState.page;
  } 
  
  onLoadUser = () => {
    this.props.getUserAC();
  }

  componentDidMount() {
    // fetch(`${USERS_ENDPOINT}?id=${this.props.params.id}`)
    //   .then((response) => response.json())
    //   .then(function(page) {
    //     return ( page && page.length > 0 ) ? page[0] : {id: 0 , name : 'no_name'};
    //   })
    //   .then((page) => this.setState({page}))
  }
  
  render() {
    const { id, name } = this.state.page
    return <ShowPage id={id} name={name} />
  }
}//class

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  onLoadPages() {
    dispatch(loadPages())
  },
  onResetPages() {
    dispatch(clearPages())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPageContainer)