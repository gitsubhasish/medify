import React from "react";

export default function SearchCard({ logo, type }) {
  return (
    <div
      className="card"
      style={{
        width: 200,
        height: 150,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center", // Ensure text is centered
      }}
    >
      <img
        src={logo}
        alt={type}
        style={{ height: 50, width: 50, marginTop: "2rem" }}
      />
      <div className="card-body">
        <p className="card-text">{type}</p>
      </div>
    </div>
  );
}
