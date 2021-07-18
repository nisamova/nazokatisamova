import logo from "../logo.svg"
import { Container, Row, Col } from "react-bootstrap"
import "./Header.css"

function Footer() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <footer className="Flower-wreath">
              <img src={logo} className="Flower-logo" alt="logo" />
            </footer>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer
