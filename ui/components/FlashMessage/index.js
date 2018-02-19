
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loading, success ,failure } from '../../actions/flashMessage'
import 'bootstrap/dist/css/bootstrap.css'
import Message from './Message'

class FlashMessage extends Component {

  render() {
      const { flashMessage } = this.props
      if(flashMessage.msg && flashMessage.type){
       
        return (
          <div>
            <span> System Say: </span>
            <Message message={flashMessage.msg} type={flashMessage.type} />
          </div>
        )
      }else {
        return ( null )
      } 
  }
} 

const mapStateToProps = (state) => {
  return {
    flashMessage : state.flashMessage
  }
}  

export default connect(
  mapStateToProps, null
)(FlashMessage)
 