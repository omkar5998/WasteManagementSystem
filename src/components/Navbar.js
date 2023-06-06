import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";

function Navbar() {
  const name = sessionStorage.getItem("username");
  const endSession = () => {
    sessionStorage.removeItem("userSession");
    sessionStorage.removeItem("userdata");
    sessionStorage.removeItem("username");
    localStorage.removeItem("user");
  };
  return (
    <div>
      <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top p-2">
        <div class="container">
          <Link
            class="navbar-brand text-warning fs-3 font-weight-bold ps-5"
            to="/home"
          >
            <h4
              className="text-center mb-3"
              style={{ color: "#FF0000" }}
            >
              Z E R O &nbsp; W A S T E
            </h4>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsenavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse text-center" id="collapsenavbar">
            <ul class="navbar-nav ml-auto ">
              <li class="nav-item  ms-4 mt-2 fs-6">
                <Link to="/home" className="nav-link text-white ">
                  HOME
                </Link>
              </li>

              <li class="nav-item  ms-4 mt-2 fs-6">
                <Link to="/donate" className="nav-link text-white ">
                  DONATE
                </Link>
              </li>

              <li class="nav-item ms-4 mt-2 fs-6">
                <Link to="/view" class="nav-link text-white">
                  PENDING DONATIONS
                </Link>
              </li>

              <li class="nav-item  ms-4 mt-2 fs-6">
                <Link to="/donations" class="nav-link text-white">
                  VIEW DONATIONS
                </Link>
              </li>

              <li class="nav-item  ms-4 mt-2 fs-6">
                <Link to="/profile" class="nav-link text-white">
                  PROFILE
                </Link>
              </li>

              <li class="nav-item  nav-logout mt-3 ">
                <form onSubmit={endSession} action="/">
                  <button type="submit" class="btn btn-sm btn-primary">
                    <span className="fs-6 ">LOGOUT</span>
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
        <div className="ps-3 pe-5 text-center">
          <h6 className="text-white ">
            Welcome
            <br />
            <span>{name}</span>
          </h6>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
