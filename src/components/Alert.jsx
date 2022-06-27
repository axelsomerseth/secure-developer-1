import React from "react";

function Alert(props) {
  const type = props.type || "success";

  return (
    <div className={`alert alert-${type}`} role="alert">
      <div>{props.message}</div>
    </div>
  );
}

export default Alert;
