import React from "react";
import HeroImage from "../../assets/NicePng_doctor-png_336282 1.png";

export default function Hero() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 d-flex flex-column align-items-start justify-content-evenly">
          <div className="text-start">
            <span style={{ fontWeight: 500, fontSize: 30 }}>
              Skip the travel! Find Online
            </span>
            <span style={{ fontWeight: 700, fontSize: 55, display: "block" }}>
              Medical <span style={{ color: "#2AA7FF" }}>Centers</span>
            </span>
          </div>
          <div className="text-start mt-2">
            <span
              style={{
                fontWeight: 400,
                fontSize: 20,
                lineHeight: 1.5,
              }}
            >
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </span>
          </div>
          <button
            style={{
              height: 50,
              width: "30%",
              marginTop: 10,
              padding: "0 20px",
              backgroundColor: "#2AA7FF",
              color: "#ffffff",
              borderColor: "#2AA7FF",
              borderRadius: 5,
            }}
          >
            Find Centers
          </button>
        </div>
        <div className="col-lg-6 col-md-12 text-center">
          <img
            style={{ zIndex: 99, maxWidth: "100%", height: "auto" }}
            src={HeroImage}
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
}
