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
    <div className="container">
      <Navbar />
      <div className="" style={{ margin: 40 }}>
        <h2>My Bookings</h2>
        {bookings.length > 0 ? (
          <div className="row p-10 d-flex flex-column justify-content-center align-items-center mt-10">
            {bookings.map((center, index) => (
              <div
                className="col-12 col-md-12 mb-4"
                key={index}
                style={{ width: "100%" }}
              >
                <div className="card card-custom">
                  <div className="card-body d-flex">
                    {/* Icon placeholder */}
                    <div className="icon-circle">
                      <img
                        src={hospitalImg}
                        alt="Hospital Icon"
                        style={{ width: "30px" }}
                      />
                    </div>

                    {/* Medical Center Information */}
                    <div className="flex-grow-1 text-left">
                      <h5
                        className="card-title mb-0"
                        style={{ color: "#007bff" }}
                      >
                        {center.centerName}{" "}
                        <button
                          className="btn btn-outline-primary btn-sm"
                          style={{ marginLeft: 10 }}
                        >
                          {center.timeSlot}
                        </button>
                        <button
                          className="btn btn-outline-success btn-sm ml-5"
                          style={{ marginLeft: 10 }}
                        >
                          {center.date}
                        </button>
                      </h5>
                      <p className="card-text">
                        <small className="text-muted">
                          {center.city}, {center.state}
                        </small>
                      </p>
                      <span>
                        <span className="price">FREE</span>
                        <small className="text-muted">
                          {" "}
                          ₹{center.consultationFee} Consultation fee at clinic
                        </small>
                      </span>
                    </div>

                    {/* Action Area */}
                    <div className="ml-auto text-right d-flex flex-column align-items-end justify-content-center">
                      <br />
                      <span style={{ color: "green" }}>Available Today</span>
                      <button className="btn btn-custom">
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
