import React from "react";
import CarouselSection from "./CarouselSection";

export default function Midsection() {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "#ffffff",
        height: 400,
        marginTop: "-2rem",
        zIndex: 998,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
        borderRadius: 10,
        padding: "15px",
      }}
    >
      <CarouselSection />
    </div>
  );
}
