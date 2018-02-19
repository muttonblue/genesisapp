import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Alert, Fade } from 'reactstrap';

export default class Message extends Component {
    render() {
        const { message , type } = this.props
        let color = (type === 'SUCCESS')? "success" : 'primary';
        return (
            <div>
                <Alert color={color}> {message} </Alert> 
            </div>
        )
    }
}