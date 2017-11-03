import React, { Component } from 'react';
import styles from './style.module.css';

class Hero extends Component {
  render() {
    return (
      <div className={styles.hero}>
        <h1 className={styles.h1}>COOL</h1>
      </div>
    );
  }
}

export default Hero;
