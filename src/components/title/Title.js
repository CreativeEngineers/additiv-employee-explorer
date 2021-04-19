import React from 'react';
import styles from './Title.module.css';

const Title = ({text}) => {
  return <h3 className={styles.titleStyle}>{text}</h3>
}

export default Title;