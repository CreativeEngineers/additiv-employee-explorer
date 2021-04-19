import React from "react";
import styles from './PageTitle.module.css';

const PageTitle = ({ text = "Page Title" }) => {
  return <h2 className={styles.pageTitle}>{text}</h2>;
};

export default PageTitle;
