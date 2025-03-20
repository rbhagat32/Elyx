import React from "react";
import styles from "../../styles/ButtonShadow.module.css";

interface PropTypes {
  children: React.ReactNode;
}

const Button3 = ({ children }: PropTypes) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button3;
