import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import {
  Row,
  Col,
  Card,
  Button,
  Container,
  Modal,
  handleClose,
  show,
  Nav,
} from "react-bootstrap";
import Navbar from '../Components/navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faShower,
  faMapMarkerAlt,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import firebase from "firebase";
import { auth, database } from "../config";

export default function PersonalRooms() {
  //Authstate
  const [authState, setAuthState] = useState(null);
  const [userUid, setUserUid] = useState(null);
  const [listingsCheck, setListingsCheck] = useState(null);
  //snapshots
  const [listings, setListings] = useState([]);
   //spinner
   const [loading, setLoading] = useState(true)
  //

  return (
    <>
    <Navbar/>

    {/* Spinner */}  
    {loading==true ? <div className="sk-cube-grid">
  <div className="sk-cube sk-cube1"></div>
  <div className="sk-cube sk-cube2"></div>
  <div className="sk-cube sk-cube3"></div>
  <div className="sk-cube sk-cube4"></div>
  <div className="sk-cube sk-cube5"></div>
  <div className="sk-cube sk-cube6"></div>
  <div className="sk-cube sk-cube7"></div>
  <div className="sk-cube sk-cube8"></div>
  <div className="sk-cube sk-cube9"></div>
</div> : ""}

     
      <Container>
        <Row>
          {/* {listings.map((data, id) => ( */}
           <Col sm={12} md={4} lg={4} key={uuidv4()}>

           {/* <Link to={{ pathname: '/property', search: `?${data.key}`, state: { fromDashboard: true }}}> */}

           <Card className="all-properties">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbHN0YXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  className="my-listings-thumbnail"
                />
                <Card.Body>
                  <Card.Title className="text-dark">data title</Card.Title>
                  <Card.Text className="p-2 text-dark">
                    <FontAwesomeIcon icon={faBed} /> data.bedrooms&nbsp;
                    <FontAwesomeIcon icon={faShower} /> data.bathrooms&nbsp;
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> data.city&nbsp;
                    <span className="p-2">
                      <FontAwesomeIcon icon={faRupeeSign} /> data.per_month
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
              {/* </Link> */}
            </Col>
            <Col sm={12} md={4} lg={4} key={uuidv4()}>

{/* <Link to={{ pathname: '/property', search: `?${data.key}`, state: { fromDashboard: true }}}> */}

<Card className="all-properties">
     <Card.Img
       variant="top"
       src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbHN0YXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
       className="my-listings-thumbnail"
     />
     <Card.Body>
       <Card.Title className="text-dark">data title</Card.Title>
       <Card.Text className="p-2 text-dark">
         <FontAwesomeIcon icon={faBed} /> data.bedrooms&nbsp;
         <FontAwesomeIcon icon={faShower} /> data.bathrooms&nbsp;
         <FontAwesomeIcon icon={faMapMarkerAlt} /> data.city&nbsp;
         <span className="p-2">
           <FontAwesomeIcon icon={faRupeeSign} /> data.per_month
         </span>
       </Card.Text>
     </Card.Body>
   </Card>
   {/* </Link> */}
 </Col>
 <Col sm={12} md={4} lg={4} key={uuidv4()}>

{/* <Link to={{ pathname: '/property', search: `?${data.key}`, state: { fromDashboard: true }}}> */}

<Card className="all-properties">
     <Card.Img
       variant="top"
       src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbHN0YXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
       className="my-listings-thumbnail"
     />
     <Card.Body>
       <Card.Title className="text-dark">data title</Card.Title>
       <Card.Text className="p-2 text-dark">
         <FontAwesomeIcon icon={faBed} /> data.bedrooms&nbsp;
         <FontAwesomeIcon icon={faShower} /> data.bathrooms&nbsp;
         <FontAwesomeIcon icon={faMapMarkerAlt} /> data.city&nbsp;
         <span className="p-2">
           <FontAwesomeIcon icon={faRupeeSign} /> data.per_month
         </span>
       </Card.Text>
     </Card.Body>
   </Card>
   {/* </Link> */}
 </Col>
          {/* ))} */}
        </Row>
      </Container>
      <br />
      <br />
    </>
  );
}
