import React, { useState, useEffect } from "react";
import axios from "axios";

function List() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/api")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  const ListData = Array.from(data);

  const Studentdata = ListData.map((data) => {
    return (
      <>
        <tr>
          <td style={{ fontWeight: "700" }}> {data.Name} </td>
          <td style={{ fontWeight: "700" }}> {data.Email} </td>
          <td style={{ fontWeight: "700" }}> {data.Roll} </td>
          <td><img src={data.image} style={{ width: "80px" }} alt="student image"></img></td>
        </tr>
      </>
    );
  })

  return (
    <>
    <br/>
    <br/>
      <div className="container">
        <div className="col" style={{ marginLeft: "150px", marginRight: "150px" }}>
          <table class="table table-bordered table-striped">
            <tbody>
              {Studentdata}
            </tbody>
          </table>
        </div>
      </div>      
    </>
  );
}

export default List;
