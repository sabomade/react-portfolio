import React from "react";
import "./style.css";
import Slide from "../Slide";
import demos from "../../work.json";

function Carousel() {
  return (
    // <!-- ====== Carousel ====== -->
    <div className="carouselObj">
      <div
        className="carousel slide"
        data-ride="carousel"
        data-interval="20000"
      >
        <div className="carousel-inner" role="listbox">
          {demos.map((demo) => (
            <Slide
              id={demo.id}
              name={demo.name}
              image={demo.image}
              label={demo.label}
              description={demo.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
