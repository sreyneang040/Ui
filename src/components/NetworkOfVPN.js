import { Row, Col, Container } from "react-bootstrap";
const chooseYourPlan = () => {
    return (
        <Container>
            <h3 className="text-center">
                Huge Global Network  of Fast VPN
                    </h3>
            <p className="text-center text-secondary">
                See <strong>LaslesVPN partner</strong>
            </p>
            <Row className="mt-5 text-center">
                <Col xs={12} sm={12} lg={4} xl={4} md={4} className="mt-2">
                    <img src="/images/netflix.PNG" />
                </Col>
                <Col xs={12} sm={12} lg={4} xl={4} md={4}>
                    <img src="/images/reddit.PNG" />
                </Col>
                <Col xs={12} sm={12} lg={4} xl={4} md={4} className="mt-3">
                    <img src="/images/amazon.PNG" />
                </Col>
                <Col xs={12} sm={12} lg={4} xl={4} md={4}>
                    <img src="/images/discord.PNG" />
                </Col>
                <Col xs={12} sm={12} lg={4} xl={4} md={4}>
                    <img src="/images/spotify.PNG" />
                </Col>
                <div style={{ marginBottom: "30%" }}></div>
            </Row>
        </Container>
    );
};

export default chooseYourPlan;
