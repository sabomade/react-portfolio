import React from "react";

function Slide(props) {
  if (props.id === 1) {
    return (
      <>
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            alt={props.name}
            src={props.image}
            data-holder-rendered="true"
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>{props.label}</h3>
            <p>{props.description}</p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            alt={props.name}
            src={props.image}
            data-holder-rendered="true"
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>{props.label}</h3>
            <p>{props.description}</p>
          </div>
        </div>
      </>
    );
  }
}

export default Slide;
