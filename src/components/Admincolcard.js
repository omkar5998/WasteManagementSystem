import React from "react";

function Admincolcard({ request }) {
  return (
    <tr>
      <td className="fs-6 pe-5">DON-{request.reqid}</td>
      <td className="fs-6 pe-5">{request.name}</td>
      <td className="fs-6 pe-5">{request.email}</td>
      <td className="fs-6 pe-5">{request.plasticQty}</td>
      <td className="fs-6 pe-5">{request.ewasteQty}</td>
    </tr>
  );
}

export default Admincolcard;
