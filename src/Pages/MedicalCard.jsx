import React, { useState } from "react";
import hospitalImg from "../assets/image 22.png";
import "./MedicalCardStyle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import moment from "moment";

export default function MedicalCard({ center, index }) {
  const timeSlots = {
    Morning: ["11:30 AM"],
    Afternoon: ["12:00 PM", "12:30 PM", "01:00 PM", "02:00 PM"],
    Evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };

  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlotSelection = (slot, day) => {
    const bookingDetails = {
      centerName: center["Hospital Name"],
      city: center.City,
      state: center.State,
      consultationFee: center.consultationFee,
      timeSlot: slot,
      date: day,
    };

    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    existingBookings.push(bookingDetails);

    localStorage.setItem("bookings", JSON.stringify(existingBookings));
    setSelectedTimeSlot(slot);
  };

  // Get the next 7 days
  const getNextSevenDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = moment().add(i, "days").format("dddd, MMM Do");
      days.push(day);
    }
    return days;
  };

  const nextSevenDays = getNextSevenDays();

  return (
    <div className="col-12 col-md-12 mb-4" key={index} style={{ width: "60%" }}>
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
              className="d-flex flex-column justify-content-between align-items-start"
              style={{
                color: "#007bff",
              }}
            >
              <span
                className="card-title mb-0"
                style={{
                  color: "#007bff",
                  fontSize: 10,
                  fontWeight: "bold",
                  paddingLeft: "2rem",
                }}
              >
                {center["Hospital Name"]}
              </span>
              <p className="card-text">
                <small
                  className="text-muted"
                  style={{ fontWeight: "bold", paddingLeft: "2rem" }}
                >
                  {center.City}, {center.State}
                </small>
              </p>
              <span style={{ paddingLeft: "2rem" }}>
                <span className="price">FREE</span>
                <small className="text-muted">
                  {" "}
                  ₹{center.consultationFee} Consultation fee at clinic
                </small>
              </span>
            </div>
          </div>

          {/* Action Area */}
          <div className="col-12 col-md-3">
            <br />
            <span style={{ color: "green" }}>Available Today</span>
            <button className="btn btn-sm btn-info">
              Book FREE Center Visit
            </button>
          </div>
        </div>
        {/*Time Slot*/}
        <div className="time-slot-section m-3">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
          >
            {nextSevenDays.map((day, dayIdx) => (
              <SwiperSlide key={dayIdx}>
                <div className="time-slot-header d-flex justify-content-center align-items-center">
                  <h6 className="mb-0" style={{ color: "green" }}>
                    {day} <span className="text-muted">11 Slots Available</span>
                  </h6>
                </div>
                <div className="time-slots mt-5">
                  <div className="row">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-2 col-md-2">
                          <h6 style={{ marginRight: 10 }}>Morning</h6>
                        </div>
                        <div className="col-10 col-md-10 d-flex justify-content-between">
                          {timeSlots.Morning.map((slot, idx) => (
                            <button
                              key={idx}
                              className={`btn btn-sm btn-outline-info time-slot-btn ${
                                selectedTimeSlot === slot ? "selected" : ""
                              }`}
                              onClick={() => handleSlotSelection(slot, day)}
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
                            className={`btn btn-sm btn-outline-info time-slot-btn ${
                              selectedTimeSlot === slot ? "selected" : ""
                            }`}
                            onClick={() => handleSlotSelection(slot, day)}
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
                            className={`btn btn-sm btn-outline-info time-slot-btn ${
                              selectedTimeSlot === slot ? "selected" : ""
                            }`}
                            onClick={() => handleSlotSelection(slot, day)}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/*End Time Slot*/}
      </div>
    </div>
  );
}
