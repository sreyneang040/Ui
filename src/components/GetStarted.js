import { Button, Row, Container, Col } from "react-bootstrap";
const GetStarted = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} lg={6} sm={12} xl={6} md={6}>
          <h3 className="ml-2 mt-5">
            Want anything to be <br></br>
            easy with LaslesVPN.
          </h3>
          <br></br>
          <p className="ml-2">
            Provide a network for all your needs with ease and fun using {" "}
            <strong>LaslesVPN</strong>
            <br />
            discover intersting features from us.
          </p>
          <Button
            style={{ width: "250px" }}
            className="btn btn-danger shadow mt-5 p-3"
            size="lg">GetStarted
          </Button>
        </Col>
        <Col xs={12} lg={6} sm={12} md={6} xl={6} className="mb-5 imgGetStarted text-center">
          <img src="images/image1.PNG" alt="logo" width="90%" />
        </Col>
      </Row>
    </Container>
  )
}
export default GetStarted;
