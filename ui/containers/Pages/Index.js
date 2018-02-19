import React, { Component } from 'react'
import PropTypes from 'prop-types' 
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import { USERS_ENDPOINT } from '../../constants/endpoints'
import { loadPages, clearPages } from '../../actions/page'
import { Pages, FlashMessage } from '../../components'

class PagesContainer extends Component {

  static propTypes = {
    pages: PropTypes.array.isRequired,
    onLoadPages: PropTypes.func.isRequired,
    onResetPages: PropTypes.func.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return this.props.pages !== nextProps.pages;
  }

  onReloadPages = (from) => {
    this.props.onLoadPages()
  }

  onClearPages = () => {
   this.props.onResetPages()
  }

  componentDidMount() {
    this.onReloadPages('containers');
  }

  render() {
    return (
      <Pages pages={this.props.pages} 
      onReloadPages={this.onReloadPages} 
      onClearPages={this.onClearPages} />
    )
  }
}//class

const mapStateToProps = (state) => ({
  pages: state.pages,
  flashMessage : state.flashMessage
})

const mapDispatchToProps = (dispatch) => ({
  onLoadPages() {
    dispatch(loadPages())
  },
  onResetPages(){
    dispatch(clearPages())
  } 
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PagesContainer)
 