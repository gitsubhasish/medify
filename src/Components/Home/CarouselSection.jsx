import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import ciImage1 from "../../assets/image 1.png";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselSection() {
  return (
    <div>
      <Carousel interval={null} indicators={true}>
        <Carousel.Item>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img className="d-block w-100" src={ciImage1} alt="First slide" />
            <img className="d-block w-100" src={ciImage1} alt="Second slide" />
            <img className="d-block w-100" src={ciImage1} alt="Third slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img className="d-block w-100" src={ciImage1} alt="Fourth slide" />
            <img className="d-block w-100" src={ciImage1} alt="Fifth slide" />
            <img className="d-block w-100" src={ciImage1} alt="Sixth slide" />
          </div>
        </Carousel.Item>
        {/* Add more Carousel.Item components as needed */}
      </Carousel>
    </div>
  );
}
