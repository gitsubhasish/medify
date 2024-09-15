import React from "react";
import mobileImg from "../../assets/Mask group.png";

export default function BottomSectionCard() {
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
          className="col-12 col-md-6 d-flex align-items-start"
          style={{ height: "100%", padding: "60px" }}
        >
          <img
            style={{ height: 300, width: 200, marginTop: "2rem", zIndex: 9999 }}
            src={mobileImg}
            alt="Sample Image"
          />
          <img
            style={{
              height: 300,
              width: 200,
              marginLeft: "-2rem",
              zIndex: 998,
            }}
            src={mobileImg}
            alt="Sample Image"
          />
        </div>
        <div
          className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start"
          style={{ height: "100%" }}
        >
          <span className="mt-5">
            <h2>
              Download The <br />
              <span style={{ color: "#0d6efd" }}>Medify</span> App
            </h2>
          </span>
          <p>Get the link to download the app</p>
          <div classname="d-flex">
            <div className="d-flex">
              <span
                className="input-group-text"
                style={{
                  backgroundColor: "#E8F1FF78",
                  borderColor: "#E8F1FF78",
                }}
              >
                +91
              </span>
              <input
                className="form-control"
                placeholder="Enter Phone Number"
                style={{
                  height: 40,
                  padding: 10,
                  marginRight: 10,
                  borderRightTopRadius: 5,
                  borderBottomRightRadius: 10,
                  backgroundColor: "#E8F1FF78",
                  borderColor: "#E8F1FF78",
                  borderRadius: 10,
                }}
              />
              <button
                className="btn btn-info w-50"
                style={{ height: 40, width: "50%", color: "#ffffff" }}
              >
                Send Sms
              </button>
            </div>
          </div>
          <div className="d-flex mt-5">
            <button
              style={{
                height: 40,
                width: 150,
                color: "#ffffff",
                backgroundColor: "#000",
                borderColor: "#000",
                borderRadius: 5,
              }}
            >
              Google Play
            </button>
            <button
              style={{
                height: 40,
                width: 150,
                color: "#ffffff",
                backgroundColor: "#000",
                borderColor: "#000",
                borderRadius: 5,
                marginLeft: 5,
              }}
            >
              App Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
