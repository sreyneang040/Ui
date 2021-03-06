import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import StorageIcon from '@material-ui/icons/Storage';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
function SaleSummaryAndFeed() {
    return (
        <Container fluid={true}>
            <Row>
                <Col md={2}></Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <div className="d-md-flex align-items-center">
                                <div>
                                    <Card.Title>Sales Summary</Card.Title>
                                    <Card.Subtitle>Overview of Latest Month</Card.Subtitle>
                                </div>
                                <div className="ms-auto ml-auto d-flex no-block align-items-center">
                                    <ul className="list-inline font-12 dl m-r-15 m-b-0">
                                        <li className="list-inline-item text-info"><FiberManualRecordRoundedIcon /> Iphone
                                </li>
                                        <li className="list-inline-item text-primary"><FiberManualRecordRoundedIcon className="text-primary" />  Ipad
                                </li>
                                    </ul>
                                </div>
                            </div>
                            <Row>
                                <Col lg={12}>
                                    <div className="campaign ct-charts mt-1">
                                        <Image src="/images/chart.PNG" width="100%" />
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Feeds</Card.Title>
                            <div className="feed-widget">
                                <ul className="list-style-none feed-body m-0 p-b-2">
                                    <li className="feed-item">
                                        <div className="feed-icon bg-primary"><NotificationsNoneIcon className="mt-2" /></div> You have 4
                                pending tasks. <span className="ms-auto ml-auto font-12 text-muted">Just Now</span>
                                    </li>
                                    <li className="feed-item">
                                        <div className="feed-icon bg-success">< StorageIcon className="mt-2" /></div> Server #1
                                overloaded.<span className="ms-auto ml-auto font-12 text-muted">2 Hours ago</span>
                                    </li>
                                    <li className="feed-item">
                                        <div className="feed-icon bg-warning"><ShoppingCartIcon className="mt-2" /></div> New
                                order received.<span className="ms-auto ml-auto font-12 text-muted">31 May</span>
                                    </li>
                                    <li className="feed-item">
                                        <div className="feed-icon bg-danger"><PersonOutlineIcon className="mt-2" /></div> New user
                                registered.<span className="ms-auto ml-auto font-12 text-muted">30 May</span>
                                    </li>
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SaleSummaryAndFeed
