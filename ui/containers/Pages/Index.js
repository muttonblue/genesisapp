import React, { Component } from 'react'
import PropTypes from 'prop-types' 
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import { USERS_ENDPOINT } from '../../constants/endpoints'
import { loadPages } from '../../actions/page'
import { Pages } from '../../components'

class PagesContainer extends Component {

  static propTypes = {
    pages: PropTypes.array.isRequired,
    onLoadPages: PropTypes.func.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return this.props.pages !== nextProps.pages;
  }

  onReloadPages = (from) => {
    this.props.onLoadPages()
  }

  onClearPages = () => {
    this.props.clearPages()
  }

  componentDidMount() {
    this.onReloadPages('containers');
  }

  render() {
    return (
      <Pages pages={this.props.pages} onReloadPages={this.onReloadPages} onClearPages={this.onClearPages} />
    )
  }
}//class

const mapStateToProps = (state) => ({
  pages: state.pages
})

const mapDispatchToProps = (dispatch) => ({
  onLoadPages() {
    dispatch(loadPages())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PagesContainer)
 