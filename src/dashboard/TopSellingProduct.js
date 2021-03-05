import {Col, Row,Container, Badge} from 'react-bootstrap'
import '../core/topbar/header.scss'
import '../core/wave-effects/wave-effects.scss'
import '../core/sidebar/sidebar.scss'
import '../core/breadcrumb/breadcrumb.scss'
import '../core/buttons/buttons.scss'
function TopSellingProduct() {
    return (
        <div className ="mt-3">
        <Container fluid ={true}>
        <Row>
            <Col lg ={2}></Col>
                    <Col lg ={10}>
                        <div className="card">
                            <div className="card-body">
                                <div className="d-md-flex">
                                    <div>
                                        <h4 className="card-title">Top Selling Products</h4>
                                        <h5 className="card-subtitle">Overview of Top Selling Items</h5>
                                    </div>
                                    <div className="ms-auto ml-auto">
                                        <div className="dl">
                                            <select className="form-select shadow-none">
                                                <option value="0" selected>Monthly</option>
                                                <option value="1">Daily</option>
                                                <option value="2">Weekly</option>
                                                <option value="3">Yearly</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                                            className="btn btn-circle d-flex btn-info text-white">EA</a>
                                                    </div>
                                                    <div className="">
                                                        <h4 className="m-b-0 font-16">Elite Admin</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Single Use</td>
                                            <td>John Doe</td>
                                            <td>
                                            <Badge variant="danger">Angular</Badge>

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
                                                            className="btn btn-circle d-flex bg-warning text-white">MA</a>
                                                    </div>
                                                    <div className="">
                                                        <h4 className="m-b-0 font-16">Monster Admin</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Single Use</td>
                                            <td>Venessa Fern</td>
                                            <td>
                                            <Badge variant="primary">Vue Js</Badge>

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
                                                            className="btn btn-circle d-flex btn-success text-white">MP</a>
                                                    </div>
                                                    <div className="">
                                                        <h4 className="m-b-0 font-16">Material Pro Admin</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Single Use</td>
                                            <td>John Doe</td>
                                            <td>
                                            <Badge variant="success">Bootstrap</Badge>

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
                                                            className="btn btn-circle d-flex text-white" style= {{backgroundColor:'purple'}}>AA</a>
                                                    </div>
                                                    <div className="">
                                                        <h4 className="m-b-0 font-16">Ample Admin</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Single Use</td>
                                            <td>John Doe</td>
                                            <td>
                                            <Badge variant="info">React</Badge>

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
                        </div>
                    </Col>
                </Row>
                </Container>
                </div>
    )
}

export default TopSellingProduct
