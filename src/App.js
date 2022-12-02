import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import List from './components/List'
import Nav from "./components/Nav";



function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="List" element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
   );
}

export default App;

