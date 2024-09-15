import React from "react";
import blogImage from "../../assets/image 3.png";

export default function BlogSection() {
  return (
    <div
      className="container-fluid d-flex flex-column justify-content-evenly"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: 15,
      }}
    >
      <h4 className="mt-5" style={{ color: "#2AA7FF" }}>
        Blog & News
      </h4>
      <h1 className="mt-1">Read Our Latest News</h1>
      <div
        className="row justify-content-center align-items-center"
        style={{ margin: 20 }}
      >
        <div className="card col-md-3 m-2">
          <img src={blogImage} class="card-img-top" alt="Blog Image" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card col-md-3 m-2">
          <img src={blogImage} class="card-img-top" alt="Blog Image" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card col-md-3 m-2">
          <img src={blogImage} class="card-img-top" alt="Blog Image" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
