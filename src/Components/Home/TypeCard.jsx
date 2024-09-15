import React from "react";
import SearchCard from "./SearchCard";
import cardLogo1 from "../../assets/Group (1).png";
import cardLogo2 from "../../assets/Group (2).png";
import cardLogo3 from "../../assets/Group (3).png";
import cardLogo4 from "../../assets/Group (4).png";

export default function TypeCard() {
  return (
    <div
      className="container"
      style={{
        borderRadius: 15,
        padding: "20px", // Added padding for spacing inside the container
        zIndex: 999999,
        height: "auto",
      }}
    >
      <div className="row" style={{ padding: "0 10px" }}>
        <div
          className="col-6 col-md-5 flex-column justify-content-center"
          style={{ height: "100%", padding: "60px" }}
        >
          <h6 style={{ color: "#2AA7FF", textAlign: "left" }}>
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </h6>
          <h1 style={{ textAlign: "left" }}>Our Families</h1>
          <p style={{ textAlign: "left" }}>
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist, we
            can provide referrals or advice about the type of practitioner you
            require. We treat all enquiries sensitively and in the strictest
            confidence.
          </p>
        </div>
        <div
          className="col-6 col-md-7 d-flex justify-content-center align-items-center g-2"
          style={{ height: "100%" }}
        >
          <div className="row">
            <div className="col-12 col-md-6">
              <SearchCard logo={cardLogo1} type="Doctors" />
            </div>
            <div className="col-12 col-md-6 mt-4">
              <SearchCard logo={cardLogo2} type="Doctors" />
            </div>
            <div className="col-12 col-md-6">
              <SearchCard logo={cardLogo3} type="Doctors" />
            </div>
            <div className="col-12 col-md-6 mt-4">
              <SearchCard logo={cardLogo4} type="Doctors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
