import React, { useState } from "react";
import hospitalImg from "../assets/image 22.png";
import "./MedicalCardStyle.css";

export default function MedicalCard({ center, index }) {
  const timeSlots = {
    Morning: ["11:30 AM"],
    Afternoon: ["12:00 PM", "12:30 PM", "01:00 PM", "02:00 PM"],
    Evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };

  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleSlotSelection = (slot) => {
    const bookingDetails = {
      centerName: center["Hospital Name"],
      city: center.City,
      state: center.State,
      consultationFee: center.consultationFee,
      timeSlot: slot,
      date: new Date().toLocaleDateString(),
    };

    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    existingBookings.push(bookingDetails);

    localStorage.setItem("bookings", JSON.stringify(existingBookings));
    setSelectedTimeSlot(slot);
  };
  return (
    <div className="col-12 col-md-12 mb-4" key={index} style={{ width: "60%" }}>
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
            <h5 className="card-title mb-0" style={{ color: "#007bff" }}>
              {center["Hospital Name"]}
            </h5>
            <p className="card-text">
              <small className="text-muted">
                {center.City}, {center.State}
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
            <button className="btn btn-custom">Book FREE Center Visit</button>
          </div>
        </div>
        {/*Time Slot*/}
        <div className="time-slot-section m-3">
          <div className="time-slot-header d-flex justify-content-between align-items-center">
            <h6 className="mb-0">
              Today <span className="text-muted">11 Slots Available</span>
            </h6>
          </div>
          <div className="time-slots mt-5">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-2 col-md-2">
                    <h6 style={{ marginRight: 10 }}>Morning </h6>
                  </div>
                  <div className="col-10 col-md-10 d-flex justify-content-between">
                    {timeSlots.Morning.map((slot, idx) => (
                      <button
                        key={idx}
                        className={`btn btn-sm time-slot-btn ${
                          selectedTimeSlot === slot ? "selected" : ""
                        }`}
                        onClick={() => handleSlotSelection(slot)}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-2 col-md-2">
                  <h6 style={{ marginRight: 10 }}>Afternoon</h6>
                </div>
                <div className="col-10 col-md-10 d-flex justify-content-between">
                  {timeSlots.Afternoon.map((slot, idx) => (
                    <button
                      key={idx}
                      className={`btn btn-sm time-slot-btn ${
                        selectedTimeSlot === slot ? "selected" : ""
                      }`}
                      onClick={() => handleSlotSelection(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-2 col-md-2">
                  <h6 style={{ marginRight: 10 }}>Evening</h6>
                </div>
                <div className="col-10 col-md-10 d-flex justify-content-between">
                  {timeSlots.Evening.map((slot, idx) => (
                    <button
                      key={idx}
                      className={`btn btn-sm time-slot-btn ${
                        selectedTimeSlot === slot ? "selected" : ""
                      }`}
                      onClick={() => handleSlotSelection(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Time Slot*/}
      </div>
    </div>
  );
}
