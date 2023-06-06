import { left } from "@popperjs/core";
import React from "react";
import { Link } from "react-router-dom";
function Adminnav() {
  const logoutAdmin = () => {
    sessionStorage.removeItem("admin");
    window.location = "/";
  };

  const mystyle = {
    color: "#FF0000",
    padding: "10px",
    fontFamily: "Arial",
    marginLeft: "-100px",
    alignContent: left
  };

  return (
    <div>
      <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top p-2">
        <div class="container">
          <h3 style={mystyle}>
            Z E R O &nbsp; W A S T E &nbsp;
            <span className="text-white fs-3 ">(Admin)</span>
          </h3>

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
              <li class="nav-item ms-5">
                <Link to="/admin" className="nav-link text-white">
                  View Pending Requests
                </Link>
              </li>

              <li class="nav-item ms-5">
                <Link to="/adminview" className="nav-link text-white">
                  View Collected Donations
                </Link>
              </li>

              <li class="nav-item ms-5">
                <Link to="/adminusers" className="nav-link text-white">
                  View Users
                </Link>
              </li>

              <li class="nav-item  nav-logout">
                <button
                  class="btn btn-sm btn-primary ps-3 pe-3 p-2"
                  onClick={logoutAdmin}
                  type="submit"
                >
                  &nbsp;&nbsp;LOG OUT&nbsp;&nbsp;
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Adminnav;
