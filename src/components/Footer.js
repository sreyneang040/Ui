import { Col, Container, Row } from "react-bootstrap";
function footer() {
  return (
    <div className=" shadow bgFooter" style={{ paddingBottom: 50, paddingTop: 150 }}>
      <Container>
        <div className="contentFooter">
          <Row>
            <Col xs={12} lg={3} sm={6} md={3}>
              <Row>
                <img src="images/logo.PNG" alt="logo" />
              </Row>
              <p>
                <strong>LaslesVPN</strong> is a private virtual network that
            <br />
            has unique featuers and has high security.
          </p>
              <Row>
                <div className="circle shadow"></div>
                <div className="circle shadow"></div>
                <div className="circle shadow"></div>
              </Row>
              <p className="mt-3">&copy; 2020LaslesVPN</p>
            </Col>
            <Col xs={12} lg={3} sm={6} md={3}>
              <h4>Product</h4>
              <p>Download</p>
              <p>Pricing</p>
              <p>Locations</p>
              <p>Server</p>
              <p>Countries</p>
              <p>Blog</p>
            </Col>
            <Col xs={12} lg={3} sm={6} md={3}>
              <h4>Engage</h4>
              <p>LaslesVPN?</p>
              <p>FAQ</p>
              <p>Tutorials</p>
              <p>About Us</p>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </Col>
            <Col xs={12} lg={3} sm={6} md={3}>
              <h4>Earn Money</h4>
              <p>Affiliate</p>
              <p>Become Partner</p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default footer;
