import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  //Uploaddatavariables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Roll, setRoll] = useState("");
  const [File, setFile] = useState("");
  const nameUpdate = (event) => { setName(event.target.value) }
  const nameEmail = (event) => { setEmail(event.target.value) }
  const nameRoll = (event) => { setRoll(event.target.value) }
  const nameFile = (event) => { setFile(event.target.value) }

  //editdatavariables
  const [editname, setEditname] = useState("");
  const [editemail, setEditemail] = useState("");
  const [editroll, setEditroll] = useState("");
  const [editfile, setEditfile] = useState("");
  const Editnameupdate = (event) => { setEditname(event.target.value) }
  const Editnameemail = (event) => { setEditemail(event.target.value) }
  const Editnameroll = (event) => { setEditroll(event.target.value) }
  const Editnamefile = (event) => { setEditfile(event.target.value) }


  //editdatapopupfunction
  const editdatapopup = (id) => {
    try {
      
      fetch('http://localhost:4000/'+id, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Name: editname,
          Email: editemail,
          Roll: editroll,
          image: editfile,
        })
      })
     console.log('http://localhost:4000/'+id)
      alert("Data Edited Succesfully")
    }
    catch {
      console.log("Error Occured")
    }
  }


  //fetchdata
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/api")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  //showlist
  const ListData = Array.from(data);
  const Studentdata = ListData.map((data) => {
    return (
      <>
        <tr>
        <td style={{ fontWeight: "700" }}> {data._id} </td>
          <td style={{ fontWeight: "700" }}> {data.Name} </td>
          <td style={{ fontWeight: "700" }}> {data.Email} </td>
          <td style={{ fontWeight: "700" }}> {data.Roll} </td>
          <td><img src={data.image} style={{ width: "80px" }} alt="student"></img></td>
          <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Student Data</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <form onSubmit={() => editdatapopup(data._id)}>

                      <div class="form-group">
                        <label>{data._id}</label>
                        <input type="text" class="form-control" value={editname} onChange={Editnameupdate} />
                      </div>
                      <div class="form-group">
                        <label>Email address</label>
                        <input type="email" class="form-control" value={editemail} onChange={Editnameemail} />
                      </div>
                      <div class="form-group">
                        <label>Roll Number</label>
                        <input type="number" class="form-control" value={editroll} onChange={Editnameroll} />
                      </div>
                      <br />
                      <div class="form-group">
                        <label>Upload your image</label><br></br>
                        <input type="file" class="form-control-file" value={editfile} onChange={Editnamefile} />
                      </div>
                      <br />
                      <button type="submit" class="btn btn-primary">Submit</button> <br />
                    </form>
                  </div>
                 
                </div>
              </div>
            </div></td>
        </tr>
      </>
    );
  })

  //Submitdatafunction
  const dataSubmit = () => {
    try {
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
    catch {
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
                <input type="email" class="form-control" value={email} onChange={nameEmail} />
              </div>
              <div class="form-group">
                <label>Roll Number</label>
                <input type="number" class="form-control" value={Roll} onChange={nameRoll} />
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

      <br />
      <br />
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