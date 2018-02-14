import React, { Component } from 'react'
import PropTypes from 'prop-types';

const ShowPage = ({ id, name }) => {
  return (
    <article>
      <h1>รายละเอียด</h1>
      <h2>Id: {id}</h2>
      <p>Name : {name}</p>
    </article>
  )
}

ShowPage.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default ShowPage