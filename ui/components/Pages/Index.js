import React, { Component } from 'react'
import PropTypes from 'prop-types' 
import { Button, Table } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Page from './Page'

const Pages = ( { pages , onReloadPages, onClearPages } ) => {
  return (
    <div>
      <Button color="info" onClick={() => onReloadPages('presentation')}>Reload</Button>{' '}
      <Button color="info" onClick={() => onClearPages()}>Clear</Button>{' '} 
      <hr /> 
      <Table >
      <thead>
          <tr>
            <th>ID</th>
            <th>name-surname</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { 
             pages.map((page) => (<Page key={page.id} id={page.id} name={page.name} /> ))
          }
        </tbody>
      </Table>
    </div>
  )
};

Pages.propTypes = {
  pages: PropTypes.array.isRequired,
  onReloadPages: PropTypes.func.isRequired,
  onClearPages : PropTypes.func.isRequired
}

export default Pages