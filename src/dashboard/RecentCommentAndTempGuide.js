import { Container, Col, Row, Card , Table} from 'react-bootstrap'
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import CreateIcon from '@material-ui/icons/Create';
import CheckIcon from '@material-ui/icons/Check';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
const RecentCommentAndTempGuide = () => {
    return (
        <div className="mt-3">
            <Container fluid={true}>
                <Row>
                    <Col md={2}></Col>
                    <Col md={5}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Recent Comments</Card.Title>
                            </Card.Body>
                            <div class="comment-widgets scrollable">
                                <div class="d-flex flex-row comment-row m-t-0">
                                    <div class="p-2"><img src="images/users/1.jpg" alt="user" width="50"
                                        class="rounded-circle"></img></div>
                                    <div class="comment-text w-100">
                                        <h6 class="font-medium">James Anderson</h6>
                                        <span class="mb-3 d-block">Lorem Ipsum is simply dummy text of the printing
                                        and type setting industry. </span>
                                        <div class="comment-footer">
                                            <span className="text-muted  float-right mr-3">April 14, 2021</span> <span
                                                class="label label-rounded label-primary">Pending</span><span
                                                    class="action-icons">
                                                <a href="javascript:void(0)"><CreateIcon fontSize="small" /> </a>
                                                <a href="javascript:void(0)"><CheckIcon fontSize="small" /> </a>
                                                <a href="javascript:void(0)"><FavoriteBorderIcon fontSize="small" /> </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex flex-row comment-row mt-4">
                                    <div class="p-2"><img src="images/users/4.jpg" alt="user" width="50"
                                        class="rounded-circle"></img></div>
                                    <div class="comment-text active w-100">
                                        <h6 class="font-medium">Michael Jorden</h6>
                                        <span class="mb-3 d-block">Lorem Ipsum is simply dummy text of the printing
                                            and type setting industry. </span>
                                        <div class="comment-footer ">
                                            <span class="text-muted float-right mr-3">April 14, 2021</span>
                                            <span class="label label-success label-rounded">Approved</span>
                                            <span class="action-icons active">
                                                <a href="javascript:void(0)"><CheckIcon fontSize="small" /></a>
                                                <a href="javascript:void(0)"><FavoriteBorderIcon style={{ color: "red" }} fontSize="small" /></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex flex-row comment-row mt-4">
                                    <div class="p-2"><img src="images/users/5.jpg" alt="user" width="50"
                                        class="rounded-circle"></img></div>
                                    <div class="comment-text w-100 mb-4">
                                        <h6 class="font-medium">Johnathan Doeting</h6>
                                        <span class="mb-3 d-block">Lorem Ipsum is simply dummy text of the printing
                                            and type setting industry. </span>
                                        <div class="comment-footer">
                                            <span class="text-muted float-right mr-3">April 14, 2021</span>
                                            <span class="label label-rounded label-danger mb-3">Rejected</span>
                                            <span class="action-icons ">
                                                <a href="javascript:void(0)"><CreateIcon fontSize="small" /></a>
                                                <a href="javascript:void(0)"><CheckIcon fontSize="small" /></a>
                                                <a href="javascript:void(0)"><FavoriteBorderIcon fontSize="small" /></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={5}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Temp Guide</Card.Title>
                                <div class="d-flex align-items-center flex-row m-t-30">
                                    <div class="display-5 text-primary"><CloudQueueIcon fontSize="inherit" />
                                        <span className="ml-3">73<sup>°</sup></span></div>
                                    <div class="m-l-10 ml-3">
                                        <h3 class="m-b-0">Saturday</h3><small>Ahmedabad, India</small>
                                    </div>
                                </div>
                                <Table class="table no-border mini-table m-t-20 mt-5">
                                    <tbody>
                                        <tr>
                                            <td class="text-muted">Wind</td>
                                            <td class="font-medium">ESE 17 mph</td>
                                        </tr>
                                        <tr>
                                            <td class="text-muted">Humidity</td>
                                            <td class="font-medium">83%</td>
                                        </tr>
                                        <tr>
                                            <td class="text-muted">Pressure</td>
                                            <td class="font-medium">28.56 in</td>
                                        </tr>
                                        <tr>
                                            <td class="text-muted">Cloud Cover</td>
                                            <td class="font-medium">78%</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <ul class="row list-style-none text-center m-t-30 mt-3">
                                    <li class="col-3">
                                        <h4 class="text-primary"><WbSunnyIcon /></h4>
                                        <span class="d-block text-muted">09:30</span>
                                        <h3 class="m-t-5">70<sup>°</sup></h3>
                                    </li>
                                    <li class="col-3">
                                        <h4 class="text-primary"><CloudQueueIcon /></h4>
                                        <span class="d-block text-muted">11:30</span>
                                        <h3 class="m-t-5">72<sup>°</sup></h3>
                                    </li>
                                    <li class="col-3">
                                        <h4 class="text-primary"><CloudQueueIcon /></h4>
                                        <span class="d-block text-muted">13:30</span>
                                        <h3 class="m-t-5">75<sup>°</sup></h3>
                                    </li>
                                    <li class="col-3">
                                        <h4 class="text-primary"><CloudQueueIcon /></h4>
                                        <span class="d-block text-muted">15:30</span>
                                        <h3 class="m-t-5">76<sup>°</sup></h3>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RecentCommentAndTempGuide
