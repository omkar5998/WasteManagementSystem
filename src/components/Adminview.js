import React, { useEffect, useState } from "react";
import base_url from "../api/bootapi";
import axios from "axios";
import Admincolcard from "./Admincolcard";
import swal from "sweetalert2";

function Adminview() {
  useEffect(() => {
    document.title = "View Collections";
    if (sessionStorage.getItem("admin") != "admin") {
      window.location = "/";
    }
    viewCollection();
  }, []);

  const viewCollection = () => {
    axios.get(`${base_url}/viewcollections`).then(
      (response) => {
        console.log(response);
        setRequests(response.data);
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
  const [requests, setRequests] = useState([]);
  console.log(requests);
  return (
    <div
      className="admin_img "
    >
      <div className=" vh-100">
        <h1 className="mt-5 pt-5 text-center text-Grey fw-bold">
          COLLECTED DONATIONS
        </h1>
        <table
          className="table table-striped table-secondary mt-5 p-5 m-auto"
          style={{ width: "90%" }}
        >
          <thead>
            <tr className="fs-6">
              <th scope="col">Donation ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email ID</th>
              <th scope="col">Plastic Donated</th>
              <th scope="col">E-waste Donated</th>
            </tr>
          </thead>
          <tbody>
            {requests.length > 0 ? (
              requests.map((item) => <Admincolcard request={item} />)
            ) : (
              <h2 className="text-center m-5 p-5">No request cards</h2>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Adminview;
