import React from 'react'
import { Container,Row,Col, Badge } from 'react-bootstrap'
import '../core/topbar/header.scss'
import '../core/wave-effects/wave-effects.scss'
import '../core/sidebar/sidebar.scss'
import '../core/breadcrumb/breadcrumb.scss'
import '../core/buttons/buttons.scss'

import BorderColorIcon from '@material-ui/icons/BorderColor';
import CheckIcon from '@material-ui/icons/Check';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
function RecentCommentAndTempGuide() {
    return (
        <div className ="mt-3">
        <Container fluid ={true}>
        <Row>
            <Col md ={2}></Col>
        <Col md ={5}>
        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Recent Comments</h4>
                            </div>
                            <div className="comment-widgets scrollable">
                                <div className="d-flex flex-row comment-row m-t-0">
                                    <div className="p-2"><img src="/images/users/1.jpg" alt="user" width="50"
                                            className="rounded-circle"/></div>
                                    <div className="comment-text w-100">
                                        <h6 className="font-medium">James Anderson</h6>
                                        <span className="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing
                                            and type setting industry. </span>
                                        <div className="comment-footer">
                                            <span className="text-muted float-end">April 14, 2021</span> 
                                            <Badge variant="info badge-pill">Pending</Badge>

                                             <span
                                                className="action-icons">
                                                 <a href="javascript:void(0)"><BorderColorIcon /></a>
                                                <a href="javascript:void(0)"><CheckIcon /></a>
                                                <a href="javascript:void(0)"><FavoriteBorderIcon /></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-row comment-row">
                                    <div className="p-2"><img src="/images/users/4.jpg" alt="user" width="50"
                                            className="rounded-circle"/></div>
                                    <div className="comment-text active w-100">
                                        <h6 className="font-medium">Michael Jorden</h6>
                                        <span className="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing
                                            and type setting industry. </span>
                                        <div className="comment-footer ">
                                            <span className="text-muted float-end">April 14, 2021</span>
                                            <Badge variant="success badge-pill">Approved</Badge>
                                            {/* <span className="label label-success label-rounded">Approved</span> */}
                                            <span className="action-icons active">
                                                <a href="javascript:void(0)"><BorderColorIcon /></a>
                                                <a href="javascript:void(0)"><FavoriteBorderIcon /></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-row comment-row">
                                    <div className="p-2"><img src="/images/users/5.jpg" alt="user" width="50"
                                            className="rounded-circle"/></div>
                                    <div className="comment-text w-100">
                                        <h6 className="font-medium">Johnathan Doeting</h6>
                                        <span className="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing
                                            and type setting industry. </span>
                                        <div className="comment-footer">
                                            <span className="text-muted float-end">April 14, 2021</span>
                                            {/* <span className="label label-rounded label-danger">Rejected</span> */}
                                            <Badge variant="danger badge-pill">Rejected</Badge>
                                            <span className="action-icons">
                                            <a href="javascript:void(0)"><BorderColorIcon /></a>
                                                <a href="javascript:void(0)"><CheckIcon /></a>
                                                <a href="javascript:void(0)"><FavoriteBorderIcon /></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </Col>
        <Col md ={5}>
        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Temp Guide</h4>
                                <div className="d-flex align-items-center flex-row m-t-30">
                                    <div className="display-5 text-info"><FilterDramaIcon />
                                        <span>73<sup>°</sup></span></div>
                                    <div className="m-l-10">
                                        <h3 className="m-b-0">Saturday</h3><small>Ahmedabad, India</small>
                                    </div>
                                </div>
                                <table className="table no-border mini-table m-t-20">
                                    <tbody>
                                        <tr>
                                            <td className="text-muted">Wind</td>
                                            <td className="font-medium">ESE 17 mph</td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted">Humidity</td>
                                            <td className="font-medium">83%</td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted">Pressure</td>
                                            <td className="font-medium">28.56 in</td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted">Cloud Cover</td>
                                            <td className="font-medium">78%</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <ul className="row  text-center m-t-30">
                                    <li className="col-3">
                                        <h4 className="text-info"><WbSunnyIcon /></h4>
                                        <span className="d-block text-muted">09:30</span>
                                        <h3 className="m-t-5">70<sup>°</sup></h3>
                                    </li>
                                    <li className="col-3">
                                        <h4 className="text-info"><FilterDramaIcon /></h4>
                                        <span className="d-block text-muted">11:30</span>
                                        <h3 className="m-t-5">72<sup>°</sup></h3>
                                    </li>
                                    <li className="col-3">
                                        <h4 className="text-info"><FilterDramaIcon /></h4>
                                        <span className="d-block text-muted">13:30</span>
                                        <h3 className="m-t-5">75<sup>°</sup></h3>
                                    </li>
                                    <li className="col-3">
                                        <h4 className="text-info"><FilterDramaIcon /></h4>
                                        <span className="d-block text-muted">15:30</span>
                                        <h3 className="m-t-5">76<sup>°</sup></h3>
                                    </li>
                                </ul>
                            </div>
                        </div>
        </Col>
    </Row>
    </Container>
    </div>
    )
}

export default RecentCommentAndTempGuide
