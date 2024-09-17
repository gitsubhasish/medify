import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import BottomSectionCard from "../Components/Home/BottomSectionCard";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";
import hospitalImg from "../assets/image 22.png";
import "./MedicalCardStyle.css";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Retrieve bookings from localStorage
    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(savedBookings);
  }, []);

  return (
    <div className="container-fluid">
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
      <Navbar backgroundColor={`#ffffff`} />
      <div className="container" style={{ margin: 40 }}>
        <h2>My Bookings</h2>
        {bookings.length > 0 ? (
          <div className="row p-10 d-flex flex-column align-items-center mt-10">
            {bookings.map((center, index) => (
              <div
                className="col-12 col-md-12 mb-4"
                key={index}
                style={{ width: "75%" }}
              >
                <div className="card card-custom">
                  <div className="card-body row">
                    {/* Icon placeholder */}
                    <div className="icon-circle col-12 col-md-1">
                      <img
                        src={hospitalImg}
                        alt="Hospital Icon"
                        style={{ width: "30px" }}
                      />
                    </div>

                    {/* Medical Center Information */}
                    <div className="col-12 col-md-7">
                      <div
                        className="d-flex justify-content-between"
                        style={{
                          color: "#007bff",
                          fontSize: 10,
                          fontWeight: "bold",
                        }}
                      >
                        <div style={{ paddingLeft: "2rem" }}>
                          {center.centerName}{" "}
                        </div>
                        <div>
                          <span
                            style={{
                              marginLeft: 10,
                              padding: 5,
                              backgroundColor: "blue",
                              color: "#fff",
                            }}
                          >
                            {center.timeSlot}
                          </span>
                          <span
                            style={{
                              marginLeft: 10,
                              padding: 5,
                              backgroundColor: "green",
                              color: "#fff",
                            }}
                          >
                            {center.date}
                          </span>
                        </div>
                      </div>
                      <p
                        className="card-text d-flex justify-content-start card-title"
                        style={{ fontWeight: "bold", paddingLeft: "2rem" }}
                      >
                        <small className="text-muted">
                          {center.city}, {center.state}
                        </small>
                      </p>
                      <span
                        className="card-text d-flex justify-content-start card-title"
                        style={{ paddingLeft: "2rem" }}
                      >
                        <span className="price">FREE</span>
                        <small className="text-muted">
                          {" "}
                          ₹{center.consultationFee} Consultation fee at clinic
                        </small>
                      </span>
                    </div>

                    {/* Action Area */}
                    <div className="col-12 col-md-3">
                      <br />
                      <span style={{ color: "green" }}>Available Today</span>
                      <button className="btn btn-info btn-sm">
                        Book FREE Center Visit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No bookings found.</p>
        )}
        <Faq />
        <BottomSectionCard />
        <Footer />
      </div>
    </div>
  );
}
