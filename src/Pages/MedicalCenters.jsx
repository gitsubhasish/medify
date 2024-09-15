import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import BottomSectionCard from "../Components/Home/BottomSectionCard";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";
import MedicalCard from "./MedicalCard";

export default function MedicalCenters() {
  const location = useLocation();
  const { medicalCenters } = location.state || { medicalCenters: [] }; // Get the medical centers from location state

  console.log(medicalCenters);

  return (
    <div className="container-fluid" style={{ height: "100%" }}>
      <div
        style={{
          paddingLeft: "2rem",
          paddingRight: "2rem",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          color: "#ffffff",
          backgroundColor: "#2AA7FF",
        }}
      >
        The Health and well being of the Patient and their health care, our team
        will always be ready, so we allow best practices foor cleanliness
      </div>
      <Navbar />

      <div className="" style={{ margin: 40 }}>
        <h2>
          {medicalCenters.length} Medical Centers Available in{" "}
          {medicalCenters[0].State}
        </h2>
        {medicalCenters.length > 0 ? (
          <div className="row p-10 d-flex flex-column justify-content-center align-items-center mt-10">
            {medicalCenters.map((center, index) => (
              <MedicalCard center={center} index={index} />
            ))}
          </div>
        ) : (
          <p>No medical centers found.</p>
        )}
      </div>
      <Faq />
      <BottomSectionCard />
      <Footer />
    </div>
  );
}
