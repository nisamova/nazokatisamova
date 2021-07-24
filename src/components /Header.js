import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import Social from "./Social"

function Header() {
  return (
    <>
      <header>
        <Container fluid>
          <Navbar>
            <Container>
              <Navbar.Brand>
                <Link to="/">
                  {" "}
                  <h1 style={{ color: `#f28482` }}>Nazokat Isamova</h1>
                </Link>
              </Navbar.Brand>
              <Nav>
                <Nav.Link>
                  <Link to="/articles" exact>
                    Articles{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Social style={{ color: `black` }} />
                </Nav.Link>
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
