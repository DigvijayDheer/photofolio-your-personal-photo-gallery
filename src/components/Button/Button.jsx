import React from "react";
import PropTypes from "prop-types";
import Styles from "./Button.module.css";

function Button({ children, type, onClick }) {
  let buttonType;

  if (type === "primary_danger") {
    buttonType = Styles.primary_danger;
  } else if (type === "secondary_danger") {
    buttonType = Styles.secondary_danger;
  } else if (type === "primary_success") {
    buttonType = Styles.primary_success;
  } else if (type === "secondary_success") {
    buttonType = Styles.secondary_success;
  }

  return (
    <button className={`${Styles.button} ${buttonType}`} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf([
    "primary_danger",
    "secondary_danger",
    "primary_success",
    "secondary_success",
  ]),
};

export default Button;
