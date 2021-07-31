import React from "react"
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import Githublogin from "./Githublogin"

function Header() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Navbar>
              <Container fluid>
                <Navbar.Brand>
                  <Link
                    id="RouterNavLink"
                    to="/"
                    style={{
                      color: `#f28482`,
                      textDecoration: `none`
                    }}
                  >
                    <Githublogin login="nisamova" />
                  </Link>
                </Navbar.Brand>
                <Nav>
                  <Nav.Link>
                    <Link
                      id="RouterNavLink"
                      to="/articles"
                      exact
                      style={{
                        color: `#000000`,
                        textDecoration: `none`
                      }}
                    >
                      Articles{" "}
                    </Link>
                  </Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
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
