import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Page extends Component {
    
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }
      
    render() { 
        const { id, name } = this.props.page
        return (
        <tr>
            <th>{id}</th>
            <td>{name}</td>
            <td>
            <a href='javascript:void(0)'>Show</a>
            </td>
        </tr>
        )
    }
}