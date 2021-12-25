import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  return (
    alert !== "" && (
      <div className={`alert`}>
        <i className="fas fa-info-circle" style={{ marginRight: "5px" }} />
        <p>input something</p>
      </div>
    )
  );
};

export default Alert;
