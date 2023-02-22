import React from "react";
import { useNavigate } from "react-router-dom";
import {Row,Col,Card,Container} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBed,faShower,faMapMarkerAlt,faRupeeSign} from "@fortawesome/free-solid-svg-icons";
import { Rooms } from "./RoomData/RoomData";


export default function MyListings() {
  const navigate = useNavigate()
  return (
    <>
    <div className="featured-section">
     <h2 className="text-center p-2 mt-4">Featured Homes</h2>  
      <Container>
      <Row>
          {Rooms.map((data, id) => {
            return <Col onClick={()=>navigate(`/property/${data.id}`)} sm={12} md={4} lg={4} key={id+1}>
            <Card className="all-properties">
                <Card.Img
                  variant="top"
                  src={data.image}
                  className="my-listings-thumbnail"
                />
                <Card.Body>
                  <Card.Title className="text-dark">{data.title}</Card.Title>
                  <Card.Text className="p-2 text-dark">
                    <FontAwesomeIcon icon={faBed} /> {data.bedrooms}&nbsp;
                    <FontAwesomeIcon icon={faShower} /> {data.bathrooms}&nbsp;
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {data.city}&nbsp;
                    <span className="p-2">
                      <FontAwesomeIcon icon={faRupeeSign} /> {data.per_month}
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        })}
        </Row>
      </Container>
      </div>
      <br />
      <br />
    </>
  );
}
