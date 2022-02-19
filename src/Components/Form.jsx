import React from "react";
import styles from "./Form.module.css";

function Form(props) {
  console.log(props);
  const { onSubmit, children, title } = props;
  return (
    <form className={styles.myForm} onSubmit={onSubmit}>
      <h3>{title}</h3>
      {children}
      <div>
        <input type="submit" value="SUBMIT" />
      </div>
    </form>
  );
}

export { Form };
