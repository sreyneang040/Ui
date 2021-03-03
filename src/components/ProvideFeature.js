import {
  FaCheckCircle
} from "react-icons/fa";
import { Row, Container, Col } from "react-bootstrap";

const ProvideFeature = () => {
  return (
    <div className="provide">
      <Container>
        <Row xs={1} md={2} style={{ marginBottom: "100px" }}>
          <Col xs={12} sm={12} md={6} xl={6} lg={6}>
            <img
              src="/images/image2.PNG"
              height="85%"
              width="100%"
              className="d-inline-block align-top mt-5"
              alt="image2"
            />
          </Col>
          <Col xs={12} sm={12} md={6} xl={6} lg={6} className="mt-5">
            <h3 className="ml-3">We Provide Many</h3>
            <h3 className="ml-3"> Feature You Can Use</h3>
            <p className="mt-3 text-left ml-3">
              You can eplore the feature that we provide with fun and <br></br> have their
              own functions each feature.
            </p>
            <div className="text-secondary mt-5 text-left ml-3">
              <p>
                <FaCheckCircle className=" mr-3" color="green" size="25" />
                &nbsp;Powerful online protection.
              </p>
              <p>
                <FaCheckCircle className=" mr-3" color="green" size="25" />
                &nbsp;Internet without borders.
              </p>
              <p>
                <FaCheckCircle className=" mr-3" color="green" size="25" />
                &nbsp;Supercharged VPN.
              </p>
              <p>
                <FaCheckCircle className=" mr-3" color="green" size="25" />
                &nbsp;No specific time limits.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProvideFeature;
