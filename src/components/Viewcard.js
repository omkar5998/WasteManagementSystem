import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert2";
import base_url from "../api/bootapi";
const Viewcard = ({ request }) => {
  const setID = () => {
    sessionStorage.setItem("reqid", request.reqid);
  };
  const deleteReq = () => {
    swal
      .fire({
        title: "Are you sure you want to delete this request?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteRequest();
          swal
            .fire("Deleted!", "Your file has been deleted.", "success")
            .then(function () {
              window.location = "/view";
            });
        }
      });
  };

  const deleteRequest = () => {
    axios.delete(`${base_url}/requests/${request.reqid}`).then(
      (response) => {
        //console.log(response);
      },
      (error) => {
        console.log(error);
        swal.fire({
          icon: "error",
          title: "Oh no!",
          text: "Server is down",
        });
      }
    );
  };
  return (
    <div>
      <div class="card text-center w-75 m-auto mt-5 bg-dark text-white">
        <div class="card-header text-left">
          <h3>Request Id:&nbsp;donatereq{request.reqid}</h3>
        </div>
        <div class="card-body container text-center">
          <div class="row">
            <div class="col-lg-12 text-left p-2">
              <div class="row mb-3">
                <div class="col-lg-4 text-right">
                  <h4>Name: </h4>
                </div>
                <div class="col-lg-8">
                  <h4>{request.name}</h4>
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-lg-4 text-right">
                  <h4>Email: </h4>
                </div>
                <div class="col-lg-8">
                  <h4>{request.email}</h4>
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-lg-4 text-right">
                  <h5>Address: </h5>
                </div>
                <div class="col-lg-8">
                  <h5>{request.address}</h5>
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-lg-4 text-right">
                  <h5>Plastic Quantity: </h5>
                </div>
                <div class="col-lg-8">
                  <h5>{request.plasticQty}</h5>
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-lg-4 text-right">
                  <h5>E-Waste Quantity: </h5>
                </div>
                <div class="col-lg-8">
                  <h5>{request.ewasteQty}</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 text-right">
              <Link class="btn btn-lg btn-primary" to="/update" onClick={setID}>
                Update
              </Link>
            </div>
            <div class="col-lg-6 text-left">
              <form>
                <button
                  type="button"
                  class="btn btn-lg btn-primary"
                  onClick={deleteReq}
                >
                  Delete
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="card-footer text-muted">
          <h4 className="text-center">
            Collection is pending, we will contact you soon.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Viewcard;
