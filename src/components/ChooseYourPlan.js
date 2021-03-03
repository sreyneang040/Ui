import { FaCheck } from "react-icons/fa";
import { Button, Row, Col, Container, Card } from "react-bootstrap";

const chooseYourPlan = () => {
    return (
        <div className="rounded text-center" style={{ backgroundColor: "#fdfdfd" }} >
            <Container className="mt-5" >
                <div className="mt-5 text-center" >
                    <h3> Choose Your Plan </h3>
                    <p> Let 's choose the package that is best for you and explore ithappily andcheerfully.</p>
                </div>
                <div className="mt-5" >
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4} >
                            <Card className="mt-3" >
                                <Card.Body>
                                    <img className="text-center mt-5" src="images/image3.PNG" width="50%" height="50%" />
                                    <Card.Title className="text-center mt-5" > Free Plan </Card.Title>
                                    <Card.Text className="text-left ml-5 mt-5 free-plan" >
                                        <div className="textPlan" >
                                            <p><FaCheck color="green" /> &nbsp; Unlimited Bandwitch </p>
                                            <p><FaCheck color="green" /> &nbsp; Encrypted Connection </p>
                                            <p><FaCheck color="green" /> &nbsp; No Traffic Logs </p>
                                            <p><FaCheck color="green" /> &nbsp; Works on All Devices </p>
                                        </div>
                                    </Card.Text>
                                    <div style={{ marginBottom: "146px" }}></div>
                                    <div className="top-card-free">
                                        <Card.Title><strong> Free </strong> </Card.Title>
                                        <Button style={{ width: "150px" }} variant="outline-danger rounded-pill" > Select </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Card className="mt-3" >
                                <Card.Body>
                                    <img className="text-center mt-5" src="images/image3.PNG" width="50%" height="50%" />
                                    <Card.Title className="text-center mt-5" > Standard Plan </Card.Title>
                                    <Card.Text className="text-left ml-5 mt-5 standard-plan" >
                                        <div className="textPlan" >
                                            <p><FaCheck color="green" /> &nbsp; Unlimited Bandwitch </p>
                                            <p><FaCheck color="green" /> &nbsp; Encrypted Connection </p>
                                            <p><FaCheck color="green" /> &nbsp; No Traffic Logs </p>
                                            <p><FaCheck color="green" /> &nbsp; Works on All Devices </p>
                                            <p><FaCheck color="green" /> &nbsp; Connecting Anyware </p>
                                        </div>
                                    </Card.Text>
                                    <div style={{ marginBottom: "140px" }}> </div>
                                    <div className="top-card-standard">
                                        <Card.Title><strong> $9 / mo </strong></Card.Title>
                                        <Button style={{ width: "150px" }} variant="outline-danger rounded-pill"> Select </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4} >
                            <Card className="mt-3  border border-danger" style={{ marginBottom: "100px" }} >
                                <Card.Body >
                                    <img className="text-center mt-5" src="images/image3.PNG" width="50%" height="50%" />
                                    <Card.Title className="text-center mt-5" > Premium Plan </Card.Title>
                                    <Card.Text className="text-left mt-5 ml-5" >
                                        <div className="textPlan" >
                                            <p><FaCheck color="green" /> &nbsp; Unlimited Bandwitch </p>
                                            <p><FaCheck color="green" /> &nbsp; Encrypted Connection </p>
                                            <p><FaCheck color="green" /> &nbsp; No Traffic Logs </p>
                                            <p><FaCheck color="green" /> &nbsp; Works on All Devices </p>
                                            <p><FaCheck color="green" /> &nbsp; Connecting Anyware </p>
                                            <p><FaCheck color="green" /> &nbsp; Get New Feature </p>
                                        </div>
                                    </Card.Text> <div style={{ marginBottom: "100px" }}> </div>
                                    <Card.Title className="text-center">
                                        <strong > $12 / mo </strong>
                                    </Card.Title>
                                    <Button style={{ width: "150px" }} className="btn btn-danger shadow rounded-pill" >Select </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default chooseYourPlan;