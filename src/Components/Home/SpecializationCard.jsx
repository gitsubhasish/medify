import React from "react";
import SearchCard from "./SearchCard";
import cardLogo1 from "../../assets/Group (7).png";
import cardLogo2 from "../../assets/Group (8).png";
import cardLogo3 from "../../assets/Group (9).png";
import cardLogo4 from "../../assets/Group (10).png";
import cardLogo5 from "../../assets/Group (11).png";
import cardLogo6 from "../../assets/Group (12).png";
import cardLogo7 from "../../assets/Group (13).png";
import cardLogo8 from "../../assets/Group (14).png";

export default function SpecializationCard() {
  return (
    <div
      className="container d-flex flex-column justify-content-evenly"
      style={{
        borderRadius: 15,
        padding: "15px", // Added padding for spacing inside the container
        zIndex: 999999,
        position: "relative",
      }}
    >
      <h1 className="mt-2">Find By Specialzation</h1>
      <div
        className="row justify-content-center align-items-center g-4"
        style={{ padding: "0 10px", margin: 40 }}
      >
        <div className="col-6 col-md-3">
          <SearchCard logo={cardLogo1} type="Doctors" />
        </div>
        <div className="col-6 col-md-3">
          <SearchCard logo={cardLogo2} type="Labs" />
        </div>
        <div className="col-6 col-md-3">
          <SearchCard logo={cardLogo3} type="Hospitals" />
        </div>
        <div className="col-6 col-md-3">
          <SearchCard logo={cardLogo4} type="Medical Stores" />
        </div>
        <div className="col-6 col-md-3">
          <SearchCard logo={cardLogo5} type="Ambulance" />
        </div>
        <div className="col-6 col-md-3">
          <SearchCard logo={cardLogo6} type="Ambulance" />
        </div>
        <div className="col-6 col-md-3">
          <SearchCard logo={cardLogo7} type="Ambulance" />
        </div>
        <div className="col-6 col-md-3">
          <SearchCard logo={cardLogo8} type="Ambulance" />
        </div>
      </div>
    </div>
  );
}
