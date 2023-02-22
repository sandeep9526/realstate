import React, { useState, useEffect } from "react";
import Navbar from "../Components/navbar";
import {
  Carousel,
  Row,
  Col,
  Container,
  Card,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faShower,
  faMapMarkerAlt,
  faHome,
  faArrowCircleRight,
  faCheckSquare,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Rooms } from "../Components/RoomData/RoomData";
import { useParams } from "react-router-dom";


export default function SinglePropertyPage() {;
  const {id} = useParams()
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const data = Rooms.filter(item=>item.id==id)
    setListings(data)
  }, [])
  
  return (
    <>
      <Navbar />
      {listings.map((data) => (
        <>
          <div className="caraousel-slider mr-top-slider">
            <Container>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-thumbnail"
                    src={data.image}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-thumbnail"
                    src={data.image}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-thumbnail"
                    src={data.image}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-thumbnail"
                    src={data.image}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Container>
          </div>

          <Container>
            <Row className="mt-5">
              <Col lg={8} md={8} sm={12}>
                <Card>
                  <h4 className="pl-2 pt-2">{data.title}</h4>
                  <p className="text-lead pl-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {data.city}
                  </p>

                  <Row className="p-2">
                    <Col lg={4} md={4} sm={4} className="mt-2">
                      <Card>
                        <Card.Body>
                          <FontAwesomeIcon icon={faBed} /> Bedrooms:
                          {data.bedrooms}
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mt-2">
                      <Card>
                        <Card.Body>
                          <FontAwesomeIcon icon={faShower} /> Bathrooms:
                          {data.bathrooms}
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Container>
                    <h4 className="mt-4">About this listing</h4>
                    <p className="text-lead">{data.about}</p>
                    <h4 className="mt-4">Prices</h4>
                    <Row>
                      <Col sm={12} lg={3} md={3}>
                        <p className="text-lead">
                          <FontAwesomeIcon icon={faArrowCircleRight} /> Per
                          Night: {data.per_night}
                        </p>
                      </Col>
                      <Col sm={12} lg={3} md={3}>
                        <p className="text-lead">
                          <FontAwesomeIcon icon={faArrowCircleRight} /> Per
                          Week: {data.per_week}
                        </p>
                      </Col>
                      <Col sm={12} lg={3} md={3}>
                        <p className="text-lead">
                          {" "}
                          <FontAwesomeIcon icon={faArrowCircleRight} /> Per
                          Month: {data.per_month}
                        </p>
                      </Col>
                      <Col sm={12} lg={3} md={3}>
                        <p className="text-lead">
                          <FontAwesomeIcon icon={faArrowCircleRight} /> Per
                          Year: {data.per_year}
                        </p>
                      </Col>
                    </Row>

                    <h4 className="mt-4">Amenities</h4>
                    <Row>
                      <Col sm={12} lg={3} md={3}>
                      <p className="text-lead">
                      Living Room:&nbsp;
                        {data.livingRoom == "Yes" ? <FontAwesomeIcon icon={faCheckSquare} /> : <FontAwesomeIcon icon={faTimesCircle} />}
                         
                        </p>
                      </Col>
                      <Col sm={12} lg={3} md={3}>
                      <p className="text-lead">
                     Internet:&nbsp;
                        {data.internet == "Yes" ? <FontAwesomeIcon icon={faCheckSquare} /> : <FontAwesomeIcon icon={faTimesCircle} />}
                          
                        </p>
                      </Col>
                      <Col sm={12} lg={3} md={3}>
                      <p className="text-lead">
                     Gym:&nbsp;
                        {data.gym == "Yes" ? <FontAwesomeIcon icon={faCheckSquare} /> : <FontAwesomeIcon icon={faTimesCircle} />}
                          
                        </p>
                      </Col>
                      <Col sm={12} lg={3} md={3}>
                      <p className="text-lead">
                     Parking Space:&nbsp;
                        {data.parking == "Yes" ? <FontAwesomeIcon icon={faCheckSquare} /> : <FontAwesomeIcon icon={faTimesCircle} />}
                          
                        </p>
                      </Col>
                    </Row>

                    <Row>

                    <Col sm={12} lg={3} md={3}>
                      <p className="text-lead">
                     Air Conditioner:&nbsp;
                        {data.ac == "Yes" ? <FontAwesomeIcon icon={faCheckSquare} /> : <FontAwesomeIcon icon={faTimesCircle} />}
                        </p>
                        </Col>
                    <Col sm={12} lg={3} md={3}>
                      <p className="text-lead">
                     Gated Security:&nbsp;
                        {data.gatedSecurity == "Yes" ? <FontAwesomeIcon icon={faCheckSquare} /> : <FontAwesomeIcon icon={faTimesCircle} />}
                        </p>
                        </Col>
                    <Col sm={12} lg={3} md={3}>
                      <p className="text-lead">
                     Water Supply:&nbsp;
                        {data.waterSupply == "Yes" ? <FontAwesomeIcon icon={faCheckSquare} /> : <FontAwesomeIcon icon={faTimesCircle} />}
                        </p>
                        </Col>
                    </Row>
                  </Container>
                </Card>
              </Col>
            </Row>
          </Container>
          <br />
          <br />
          <br />
        </>
      ))}
    </>
  );
}