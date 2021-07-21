import logo from "../logo.svg"
import { Container, Row, Col, Image } from "react-bootstrap"
import "./Footer.css"
import Social from "./Social"

function Footer() {
  return (
    <>
      <Container
        style={{
          textAlign: `center`
        }}
      >
        <Row>
          <Col>
            <footer className="Flower-wreath,">
              <Image
                src={logo}
                className="Flower-logo"
                alt="logo"
                height={120}
                width={120}
              />
              <Social style={{ width: `20px` }} />
              <p>&copy;2021 Made by Nazokat Isamova</p>
            </footer>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer
