import React from "react";
import Logo from "../assets/Medify.png";
import Logo2 from "../assets/Vector.png";
import Link from "./Link";

export default function Footer() {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#1B3C74", height: "auto", padding: "2rem" }}
    >
      <div className="row p-50">
        <div className="col-12 col-md-3">
          <div
            className="d-flex flex-column justify-content-between"
            style={{ height: "100%" }}
          >
            <span className="mt-5">
              <img
                src={Logo2}
                style={{
                  height: 30,
                  width: 30,
                  objectFit: "contain",
                  paddingBottom: 10,
                }}
                alt="Logo2"
              />
              <img
                src={Logo}
                style={{
                  height: "20px",
                  verticalAlign: "middle",
                }}
                alt="Logo"
              />
            </span>
            <div>Social Icons</div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-evenly col-12 col-md-3 mt-5">
          <Link text={`About Us`} />
          <Link text={`Our Pricing`} />
          <Link text={`Our Gallery`} />
          <Link text={`Appointment`} />
          <Link text={`Privacy Policy`} />
        </div>
        <div className="d-flex flex-column justify-content-evenly col-12 col-md-3 mt-5">
          <Link text={`Orthology`} />
          <Link text={`Neuorology`} />
          <Link text={`Dental Care`} />
          <Link text={`Cardiology`} />
          <Link text={`Opthalmology`} />
        </div>
        <div className="d-flex flex-column justify-content-evenly col-12 col-md-3 mt-5">
          <Link text={`About Us`} />
          <Link text={`Our Pricing`} />
          <Link text={`Our Gallery`} />
          <Link text={`Appointment`} />
          <Link text={`Privacy Policy`} />
        </div>
      </div>
      <hr style={{ color: "#ffffff" }} />
      <div className="row mt-5">
        <p style={{ color: "#ffffff" }}>
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
