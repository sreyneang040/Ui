
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import '../Combine.scss'
const Profile = () => {
    return (
        <Container fluid={true}>
            <div class="page-wrapper">
                <Row>
                    <Col md={2}></Col>
                    <Col md={3}>
                        <div class="card">
                            <div class="card-body">
                                <center class="m-t-30"> <img src="/images/users/5.jpg"
                                    class="rounded-circle" width="150" />
                                    <h4 class="card-title m-t-10">Hanna Gover</h4>
                                    <h6 class="card-subtitle">Accoubts Manager Amix corp</h6>
                                    <div class="row text-center justify-content-md-center">
                                        <div class="col-4"><a href="javascript:void(0)" class="link"><i
                                            class="icon-people"></i>
                                            <font class="font-medium">254</font>
                                        </a></div>
                                        <div class="col-4"><a href="javascript:void(0)" class="link"><i
                                            class="icon-picture"></i>
                                            <font class="font-medium">54</font>
                                        </a></div>
                                    </div>
                                </center>
                            </div>
                            <div>
                                <hr />
                            </div>
                            <div class="card-body"> <small class="text-muted">Email address </small>
                                <h6>hannagover@gmail.com</h6> <small class="text-muted p-t-30 db">Phone</small>
                                <h6>+91 654 784 547</h6> <small class="text-muted p-t-30 db">Address</small>
                                <h6>71 Pilgrim Avenue Chevy Chase, MD 20815</h6>
                                <div class="map-box">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470029.1604841957!2d72.29955005258641!3d23.019996818380896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C+Gujarat!5e0!3m2!1sen!2sin!4v1493204785508"
                                        width="100%" height="150" frameborder="0" style={{ border: "0" }}
                                        allowfullscreen></iframe>
                                </div> <small class="text-muted p-t-30 db">Social Profile</small>
                                <br />
                                <button class="btn btn-circle btn-secondary"><FacebookIcon /></button>
                                <button class="btn btn-circle btn-secondary"><TwitterIcon /></button>
                                <button class="btn btn-circle btn-secondary"><YouTubeIcon /></button>
                            </div>
                        </div>





                    </Col>
                    <Col md={7}>
                        <div class="card">
                            <div class="card-body">
                                <form class="form-horizontal form-material mx-2">
                                    <div class="form-group">
                                        <label class="col-md-12">Full Name</label>
                                        <div class="col-md-12">
                                            <input type="text" placeholder="Johnathan Doe"
                                                class="form-control form-control-line" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="example-email" class="col-md-12">Email</label>
                                        <div class="col-md-12">
                                            <input type="email" placeholder="johnathan@admin.com"
                                                class="form-control form-control-line" name="example-email"
                                                id="example-email" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-12">Password</label>
                                        <div class="col-md-12">
                                            <input type="password" value="password"
                                                class="form-control form-control-line" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-12">Phone No</label>
                                        <div class="col-md-12">
                                            <input type="text" placeholder="123 456 7890"
                                                class="form-control form-control-line" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-12">Message</label>
                                        <div class="col-md-12">
                                            <textarea rows="5" class="form-control form-control-line"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-12">Select Country</label>
                                        <div class="col-sm-12">
                                            <select class="form-select shadow-none form-control-line">
                                                <option>London</option>
                                                <option>India</option>
                                                <option>Usa</option>
                                                <option>Canada</option>
                                                <option>Thailand</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-12">
                                            <button class="btn btn-success text-white">Update Profile</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </Col>

                </Row>
            </div>
        </Container>
    )
}

export default Profile
