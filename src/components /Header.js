import {
  SiDatacamp,
  SiTwitter,
  SiFreecodecamp,
  SiGithub,
  SiLinkedin
} from "react-icons/si"
import { IoAttachSharp } from "react-icons/io5"
import { Container, Row, Col } from "react-bootstrap"

function Header() {
  return (
    <>
      <Container>
        <Row>
          <header>
            <Col>
              <h1>Nazokat Isamova</h1>
              <IoAttachSharp /> Resume
            </Col>
          </header>
          <Row>
            <Col>
              <SiLinkedin />
              <SiGithub />
              <SiTwitter />
              <SiFreecodecamp />
              <SiDatacamp />
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  )
}

export default Header
