import React, { useState } from 'react';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



const Navbar = ({setShowLogin}) => {

    const [option,setOption] = useState("home")

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid"  id='navbar'>
          <a className="navbar-brand" href="#">Navbar</a>
          <button onClick={()=>setShowLogin(true)} className="btn btn-outline-success" type="submit">login</button>
          <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a  className="nav-link " onClick={()=>setOption("home")} id={option==="home"?"active":" "} aria-current="page" >Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={()=>setOption("my-contest")} id={option==="my-contest"?"active":" "} >My Contests</a>
              </li>
              <li className="nav-item">
                <a onClick={()=>setOption("all-contest")} id={option==="all-contest"?"active":" "} className="nav-link" >All Contests</a>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
