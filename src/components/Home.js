import React from 'react'
import { useState } from 'react';

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Roll, setRoll] = useState("");
  const [File, setFile] = useState("");

  const nameUpdate = (event) => { setName(event.target.value) }
  const nameEmail = (event) => { setEmail(event.target.value) }
  const nameRoll = (event) => { setRoll(event.target.value) }
  const nameFile = (event) => { setFile(event.target.value) }

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
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" value={name} onChange={nameUpdate} />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" value={email} onChange={nameEmail}  />
              </div>
              <div class="form-group">
                <label for="exampleRoll">Roll Number</label>
                <input type="number" class="form-control" value={Roll} onChange={nameRoll}  />
              </div>
              <br />
              <div class="form-group">
                <label for="exampleFormControlFile1">Upload your image</label><br></br>
                <input type="file" class="form-control-file" id="exampleFormControlFile1" value={File} onChange={nameFile} />
              </div>
              <br />
              <button type="submit" class="btn btn-primary">Submit</button> <br />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;