import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Roll, setRoll] = useState("");
  const [File, setFile] = useState("");

  const nameUpdate = (event) => { setName(event.target.value) }
  const nameEmail = (event) => { setEmail(event.target.value) }
  const nameRoll = (event) => { setRoll(event.target.value) }
  const nameFile = (event) => { setFile(event.target.value) }


  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/api")
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
          <td><img src={data.image} style={{ width: "80px" }} alt="student"></img></td>
        </tr>
      </>
    );
  })

  const dataSubmit=()=> { try{
    fetch("http://localhost:4000/add", {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
          Name: name,
          Email: email,
          Roll: Roll,
          image: File,
      })
  })
  alert("Data Submitted Succesfully")
  }
    catch{
      console.log("Not Working")
    }
}

  return (
    <>
      <h1 style={{ textAlign: "center", color: "blue" }}>Welcome to Thermofisher Student List Project App</h1>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <form onSubmit={dataSubmit}>

              <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" value={name} onChange={nameUpdate} />
              </div>
              <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control" value={email} onChange={nameEmail}  />
              </div>
              <div class="form-group">
                <label>Roll Number</label>
                <input type="number" class="form-control" value={Roll} onChange={nameRoll}  />
              </div>
              <br />
              <div class="form-group">
                <label>Upload your image</label><br></br>
                <input type="file" class="form-control-file" value={File} onChange={nameFile} />
              </div>
              <br />
              <button type="submit" class="btn btn-primary">Submit</button> <br />
            </form>
          </div>
        </div>
      </div>

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

export default Home;