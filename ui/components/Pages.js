import React, { Component } from 'react'
import PropTypes from 'prop-types' 
import Page from './Page'
import styles from './Pages.scss'

export default class Pages extends Component {
 
  static propTypes = {
    pages: PropTypes.array.isRequired,
    onReloadPages: PropTypes.func.isRequired
  }

  render() {
    const { pages, onReloadPages } = this.props 
    return (
      <div>
        <button className={styles['button' ]} onClick={() => onReloadPages('presentation')}> Reload Pages </button>
        <hr />
        <table className='table'>
        <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              pages.map((page) => (
                <Page key={page.id} id={page.id} name={page.name} page={page} />
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}