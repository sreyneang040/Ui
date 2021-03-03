import {
  FaUser,
  FaServer,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Row, Container, Col } from "react-bootstrap";
const FirstCard = () => {
  return (
    <Container>
      <div className=" shadow first-card p-5 bg-white rounded text-center">
        <Row >
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <div class="border-card-right d-flex justify-content-left ml-5">
              <div className="text-danger icon">
                <FaUser className="mt-3" size="25" />
              </div>
              <div className="content-firstCard">
                <h4 className="ml-4">90+</h4>
                <p className="ml-4">Users</p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <div class=" border-card-left d-flex justify-content-left ml-5">
              <div className="text-danger icon">
                <FaMapMarkerAlt className="mt-3" size="25" />
              </div>
              <div className="content-firstCard">
                <h4 className="ml-3">25+</h4>
                <p className="ml-4">Location</p>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <div className="d-flex justify-content-left ml-5">
              <div className=" text-danger icon">
                <FaServer className="mt-3" size="25" />
              </div>
              <div className="content-firstCard">
                <h4 className="ml-4">50+</h4>
                <p className="ml-4">Servers</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default FirstCard;
