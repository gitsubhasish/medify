import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchCard from "./SearchCard";
import cardLogo1 from "../../assets/Group (1).png";
import cardLogo2 from "../../assets/Group (2).png";
import cardLogo3 from "../../assets/Group (3).png";
import cardLogo4 from "../../assets/Group (4).png";
import cardLogo5 from "../../assets/Group (5).png";
import { useNavigate } from "react-router-dom";

export default function SearchSection() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();

  // Fetch states on component mount
  useEffect(() => {
    axios
      .get("https://meddata-backend.onrender.com/states")
      .then((response) => setStates(response.data))
      .catch((error) => console.error("Error fetching states", error));
  }, []);

  // Fetch cities when a state is selected
  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);

    if (state) {
      axios
        .get(`https://meddata-backend.onrender.com/cities/${state}`)
        .then((response) => setCities(response.data))
        .catch((error) => console.error("Error fetching cities", error));
    } else {
      setCities([]);
    }
  };

  // Handle Search button click
  const handleSearch = () => {
    if (selectedState && selectedCity) {
      // Fetch medical centers based on selected state and city
      axios
        .get(
          `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
        )
        .then((response) => {
          // Pass the fetched medical centers to the results page
          navigate("/medical-centers", {
            state: { medicalCenters: response.data },
          });
        })
        .catch((error) =>
          console.error("Error fetching medical centers", error)
        );
    } else {
      alert("Please select both state and city!");
    }
  };

  return (
    <div
      className="container d-flex flex-column justify-content-evenly"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: 15,
        padding: "15px", // Added padding for spacing inside the container
        zIndex: 999999,
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        position: "relative",
      }}
    >
      <div
        className="row justify-content-center align-items-center g-2"
        style={{ padding: "0 10px", margin: 50 }}
      >
        <div className="col-12 col-md-4 d-flex">
          <span
            className="input-group-text"
            style={{ backgroundColor: "#E8F1FF78", borderColor: "#E8F1FF78" }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <select
            className="form-control"
            style={{
              height: 40,
              padding: 10,
              width: "75%",
              marginRight: 10,
              borderRightTopRadius: 5,
              borderBottomRightRadius: 10,
              backgroundColor: "#E8F1FF78",
              borderColor: "#E8F1FF78",
              borderRadius: 10,
            }}
            value={selectedState}
            onChange={handleStateChange}
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="col-12 col-md-4 d-flex">
          <span
            className="input-group-text"
            style={{ backgroundColor: "#E8F1FF78", borderColor: "#E8F1FF78" }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <select
            className="form-control"
            style={{
              height: 40,
              padding: 10,
              width: "75%",
              marginRight: 10,
              borderRightTopRadius: 5,
              borderBottomRightRadius: 10,
              backgroundColor: "#E8F1FF78",
              borderColor: "#E8F1FF78",
              borderRadius: 10,
            }}
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="col-12 col-md-4 d-flex">
          <button
            className="btn btn-info w-50"
            style={{ height: 40, width: "50%" }}
            onClick={handleSearch}
          >
            <FontAwesomeIcon icon={faSearch} />
            Search
          </button>
        </div>
      </div>

      <div
        className="row justify-content-center align-items-center g-2"
        style={{ padding: "0 10px", margin: 50 }}
      >
        <div className="col-6 col-md-2 m-2">
          <SearchCard logo={cardLogo1} type="Doctors" />
        </div>
        <div className="col-6 col-md-2 m-2">
          <SearchCard logo={cardLogo2} type="Labs" />
        </div>
        <div className="col-6 col-md-2 m-2">
          <SearchCard logo={cardLogo3} type="Hospitals" />
        </div>
        <div className="col-6 col-md-2 m-2">
          <SearchCard logo={cardLogo4} type="Medical Stores" />
        </div>
        <div className="col-6 col-md-2 m-2">
          <SearchCard logo={cardLogo5} type="Ambulance" />
        </div>
      </div>
    </div>
  );
}
