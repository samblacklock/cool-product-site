import React, { Component } from 'react';
import styles from './style.module.css';

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <h1>yo man this isthe header</h1>
      </div>
    );
  }
}

export default Header;