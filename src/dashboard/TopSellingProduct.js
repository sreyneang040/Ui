import React from 'react'
import { Col, Row, Container, Card } from 'react-bootstrap'
function TopSellingProduct() {
    return (
        <div classNameName="mt-3">
            <Container fluid={true}>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={10}>
                        <Card>
                            <Card.Body>
                                <div className="d-md-flex">
                                    <div>
                                        <Card.Title>Top Selling Products</Card.Title>
                                        <Card.Subtitle>Overview of Top Selling Items</Card.Subtitle>
                                    </div>
                                    <div className="ml-auto">
                                        <div className="dl">
                                            <select className="form-select border border-1 p-1 shadow-none">
                                                <option value="0" selected>Monthly</option>
                                                <option value="1">Daily</option>
                                                <option value="2">Weekly</option>
                                                <option value="3">Yearly</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                            <div className="table-responsive">
                                <table className="table v-middle">
                                    <thead>
                                        <tr className="bg-light">
                                            <th className="border-top-0">Products</th>
                                            <th className="border-top-0">License</th>
                                            <th className="border-top-0">Support Agent</th>
                                            <th className="border-top-0">Technology</th>
                                            <th className="border-top-0">Tickets</th>
                                            <th className="border-top-0">Sales</th>
                                            <th className="border-top-0">Earnings</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="m-r-10"><a
                                                        className="btn btn-circle d-flex btn-info text-white p-2">EA</a>
                                                    </div>
                                                    <div className="">
                                                        <h4 className="m-b-0 font-16 ml-2">Elite Admin</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Single Use</td>
                                            <td>John Doe</td>
                                            <td>
                                                <label className="label bg-danger text-white p-1">Angular</label>
                                            </td>
                                            <td>46</td>
                                            <td>356</td>
                                            <td>
                                                <h5 className="m-b-0">$2850.06</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="m-r-10"><a
                                                        className="btn btn-circle d-flex bg-warning text-white p-2 ">MA</a>
                                                    </div>
                                                    <div className="">
                                                        <h4 className="m-b-0 font-16 ml-2">Monster Admin</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Single Use</td>
                                            <td>Venessa Fern</td>
                                            <td>
                                                <label className="label label-info">Vue Js</label>
                                            </td>
                                            <td>46</td>
                                            <td>356</td>
                                            <td>
                                                <h5 className="m-b-0">$2850.06</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="m-r-10"><a
                                                        className="btn btn-circle d-flex btn-success text-white p-2">MP</a>
                                                    </div>
                                                    <div className="">
                                                        <h4 className="m-b-0 font-16 ml-2">Material Pro Admin</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Single Use</td>
                                            <td>John Doe</td>
                                            <td>
                                                <label className="label label-success">Bootstrap</label>
                                            </td>
                                            <td>46</td>
                                            <td>356</td>
                                            <td>
                                                <h5 className="m-b-0">$2850.06</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="m-r-10"><a
                                                        className="btn btn-circle d-flex text-white p-2" style={{ backgroundColor: 'purple' }}>AA</a>
                                                    </div>
                                                    <div className="">
                                                        <h4 className="m-b-0 font-16 ml-2">Ample Admin</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Single Use</td>
                                            <td>John Doe</td>
                                            <td>
                                                <label className="label label-purple">React</label>
                                            </td>
                                            <td>46</td>
                                            <td>356</td>
                                            <td>
                                                <h5 className="m-b-0">$2850.06</h5>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TopSellingProduct
