import { Navbar, Container, Nav } from "react-bootstrap"

function Header() {
  return (
    <>
      <header style={{ backgroundColor: `#f5cac3` }}>
        <Container fluid>
          <Navbar>
            <Container>
              <Navbar.Brand href="/">
                <h1>Nazokat Isamova</h1>
              </Navbar.Brand>
              <Nav>
                <Nav.Link href="#">Articles</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Container>
      </header>
    </>
  )
}

export default Header
/** Theme Colors
 * OffWhite -- #f7ede2
 * Pink-Nude -- #f5cac3
 * Green -- #84a59d
 * Pastel-Red -- #f28482
 * Yellow -- #f6bd60
 * Text -- #2b2d42
 */
