import React from "react";
import image from "../../src/assets/cafe.jpg";
import "../../public/css/Home.css";

function CarouselComponent() {
  return (
    <React.Fragment>
      <div>
        <img src={image} />
      </div>
    </React.Fragment>
  );
}
export default CarouselComponent;
