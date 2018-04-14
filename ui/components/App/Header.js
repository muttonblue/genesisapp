import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './Header.scss'

export default class Header extends Component {
  render() {
    return (
      <header className={styles['header']}>
        <nav>
          <Link to={{ pathname: '/' }} className={styles['brand']}>Genesis</Link>
          <ul className={styles['menu']}>
            <li className={styles['menu__item']}>
              <Link to={{ pathname: '/users' }} className={styles['menu__link']}>Users</Link>
            </li>
            <li className={styles['menu__item']}>
              <Link to={{ pathname: '/pages' }} className={styles['menu__link']}> Pages</Link>
            </li>
            <li className={styles['menu__item']}>
              <a href='#' className={styles['menu__link']}> About us </a>
            </li>
            <li className={styles['menu__item']}>
              <Link to={{ pathname: '/OfficeDev' }} className={styles['menu__link']}> OfficeDev</Link>
            </li>
            <li className={styles['menu__item']}>
              <Link to={{ pathname: '/MaterialUI' }} className={styles['menu__link']}> MaterialUI</Link>
            </li>
            <li className={styles['menu__item']}>
              <Link to={{ pathname: '/Reactstrap' }} className={styles['menu__link']}>reactstrap</Link>
            </li>            
          </ul>
        </nav>
      </header>
    )
  }
}