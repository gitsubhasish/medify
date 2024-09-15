import React from "react";
import Logo from "../assets/Medify.png";
import Logo2 from "../assets/Vector.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const myBookings = () => {
    navigate("/my-bookings");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container" style={{ marginLeft: 75, marginRight: 75 }}>
        <a className="navbar-brand" href="#">
          <span
            style={{
              backgroundColor: "#2AA7FF",
              marginRight: 5,
              display: "inline-block",
              height: 20,
              width: 20,
              verticalAlign: "middle",
            }}
          >
            <img
              src={Logo2}
              style={{
                height: "100%",
                width: "50%",
                objectFit: "contain",
                paddingBottom: 10,
              }}
              alt="Logo2"
            />
          </span>
          <img
            src={Logo}
            style={{
              height: "20px",
              verticalAlign: "middle",
            }}
            alt="Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item mx-2">
              <a class="nav-link" aria-current="page" href="#">
                Find Doctors
              </a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" aria-current="page" href="#">
                Hospitals
              </a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" aria-current="page" href="#">
                Medicines
              </a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" aria-current="page" href="#">
                Surgeries
              </a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" aria-current="page" href="#">
                Software for providers
              </a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#">
                Facilities
              </a>
            </li>
            <li className="nav-item mx-2">
              <button className="btn btn-primary" onClick={myBookings}>
                My Bookings
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
