import '../Combine.scss'
import { Container, Col, Row, Breadcrumb } from 'react-bootstrap'
const Blank = () => {
  return (
    <div className="blank">
      <div className="d-flex ">
        <Container>
          <h4 className="mt-3 ml-3">Starter Page</h4>
          <Breadcrumb className="">
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item
              active
              href="">
              Library
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
        <div className="text-end mt-3 mr-3" fluid={true}>
          <a
            href="https://www.wrappixel.com/templates/xtremeadmin/"
            class="btn btn-danger text-white"
            target="_blank"
          >
            Upgrade to Pro
          </a>
        </div>
      </div>
      <Container fluid={true}>
        <Row>
          <Col md={2}></Col>
          <Col md={10}>
            <div className="card">
              <div className="card-body">
                This is some text within a card block.
                            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Blank
