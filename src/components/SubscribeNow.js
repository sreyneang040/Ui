import { Button, Row, Container, Col } from "react-bootstrap";
export const subscribeNow = () => {
    return (
        <Container>
            <div className="cards">
                <div className="card-subscribe shadow p-5 bg-white rounded">
                    <Row>
                        <Col xl={8} lg={8} sm={12} xs={12} md={6}>
                            <div className="subscribe-content">
                                <h3 className="title-subscribe">
                                    Subscribe Now for <br></br> Get Spacial Features!
                                </h3>
                                <p>Let's subscribe with use and find the fun.</p>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} sm={12} xs={12} md={6} >
                            <div className="button-card-subscribe">
                                <Button
                                    style={{ width: "150px" }}
                                    className="btn btn-danger shadow mt-4 p-3">Subscribe Now
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>

            </div>
        </Container>
    )
}
export default subscribeNow;
