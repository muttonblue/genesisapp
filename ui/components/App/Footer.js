import React, { Component } from 'react'
import styles from './Footer.scss'

export default class Footer extends Component {
    render() {
        return (
            <footer className={styles['footer']}>
                <div className="container">
                    <span className="text-muted">@iRambo for Develop</span>
                </div>
            </footer>
        )
    }
}