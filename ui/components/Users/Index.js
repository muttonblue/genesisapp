import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Badge,Button, Container, Row, Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import User from './user'

const Users = ({users}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h5>Users</h5>
        </Col>
      </Row>
      <Row>
        <Col><hr/></Col>
      </Row>
      <Row>
      <Col><Button color="info" onClick={() => onReloadPages('presentation')}>Reload</Button>{' '}</Col>
      <Col><Button color="info" onClick={() => onClearPages()}>Clear</Button>{' '} </Col> 
        {
          //users.map((user) => (<User key={user.id} id={user.id} name={user.name} email={user.email}/>))
        }
      </Row>
    </Container>
  )
};

Users.propTypes = {
  users: PropTypes.array.isRequired
}

export default Users