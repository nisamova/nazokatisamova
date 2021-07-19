import {
  SiDatacamp,
  SiTwitter,
  SiFreecodecamp,
  SiGithub,
  SiLinkedin
} from "react-icons/si"
import { IoAttachSharp } from "react-icons/io5"
import { Navbar, Container, Row, Col, Nav } from "react-bootstrap"

function Header() {
  return (
    <>
      <Container>
        <Navbar>
          <Container>
            <Navbar.Brand href="/">Nazokat Isamova</Navbar.Brand>
            <IoAttachSharp /> Resume
            <Nav>
              <Nav.Link href="#">Articles</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
            </Nav>
          </Container>
          <Container>
            <Row>
              <Col>
                <SiLinkedin />
                <SiGithub />
                <SiTwitter />
                <SiFreecodecamp />
                <SiDatacamp />
              </Col>
            </Row>
          </Container>
        </Navbar>
      </Container>
    </>
  )
}

export default Header
