import React, { useEffect } from "react";
import "../css/profile.css";

function Profile() {
  const sess = sessionStorage.getItem("userSession");
  const userdata = JSON.parse(sessionStorage.getItem("userdata"));
  useEffect(() => {
    document.title = "Profile";
    if (sessionStorage.getItem("userSession") == null) {
      window.location = "/";
    } else if (localStorage.getItem("user") == null) {
      window.location = "/";
    }
  }, []);
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right top, #208322, #1b732c, #1c6332, #205333, #254332)",
      }}
    >
      <div class="container vh-100 w-50">
        <div class="row d-flex justify-content-center mt-4">
          <div class="col-md-10 mt-5 pt-5">
            <div class=" z-depth-3">
              <div class="col-sm-12 bg-success rounded-left">
                <div class="card-block text-center text-white">
                  <i class="fas fa-id-card fa-7x mt-5 mb-5"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-md-10 ">
            <div class=" z-depth-3">
              <div class="col-sm-12 bg-white rounded-right pb-3">
                <h3 class=" p-2 text-center font-weight-bold">
                  <b>PROFILE CARD</b>
                </h3>
                <hr class="badge-primary mt-0 " />
                <div class="row">
                  <div class="col-sm-12">
                    <h3 class="font-weight-bold">
                      Full Name : {sess != null ? userdata.name : "name"}
                    </h3>
                  </div>
                </div>
                <hr class="bg-primary" />
                <div class="row">
                  <div class="col-sm-12">
                    <h3 class="font-weight-bold">
                      Email ID : {sess != null ? userdata.email : "email"}
                    </h3>
                  </div>
                </div>
                <hr class="bg-primary" />
                <div class="row">
                  <div class="col-sm-12">
                    <h3 class="font-weight-bold">
                      City:{sess != null ? userdata.city : "city"}
                    </h3>
                  </div>
                </div>
                <hr class="bg-primary" />
                <div class="row">
                  <div class="col-sm-12">
                    <h3 class="font-weight-bold">
                      Phone : {sess != null ? userdata.phone : "phone"}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
