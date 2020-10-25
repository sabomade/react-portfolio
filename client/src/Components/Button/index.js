import React from "react";

function Button(props) {
  return (
    <Button variant={props.variant} onClick={props.onClick}>
      Warning
    </Button>
  );
}

export default Button;
