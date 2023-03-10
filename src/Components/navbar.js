import React,{useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function NavigationBar({companyName="DevBud"}) {
    const [pos, setPos] = useState("top")

    useEffect (()=>{     
      var path = window.location.pathname
      if(path == "/home"){
      document.addEventListener("scroll", e => {
          let scrolled = document.scrollingElement.scrollTop;
  
          if (scrolled >= 5){
             setPos("moved")
          } else {
             setPos("top")
          }
      })
    }else{
      setPos("moved")
    }
  },[])


  return (
  <Navbar expand="lg" className="navbar" 
  style={{backgroundColor: pos === "top" ? "" : "#fff", boxShadow: pos === "top" ? "" : "0.8px 0.8px 0.8px #000"}}
  >
  <NavLink to="/"><Navbar.Brand  className={pos === "top" ? "text-light brand-name": "text-dark brand-name"}>{companyName}</Navbar.Brand></NavLink>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <NavLink to="/"
      className={pos === "top" ? "text-light": "text-dark mr-3"}
      >Home</NavLink>
       <React.Fragment>
      <NavLink to="/personal-rooms" className={pos === "top" ? "text-light": "text-dark mr-3"}>Personal Rooms</NavLink>
      <NavLink to="/family-apartments" className={pos === "top" ? "text-light": "text-dark mr-3"}>Family Apartments</NavLink>
      <NavLink to="/vacation-villas" className={pos === "top" ? "text-light": "text-dark"}>Villas for Vacation</NavLink>
      </React.Fragment>
    </Nav>
    <Navbar.Collapse className="justify-content-end">
  </Navbar.Collapse>
  </Navbar.Collapse>
  {/* Error toast */}
  <ToastContainer/>
</Navbar>

    )
}
