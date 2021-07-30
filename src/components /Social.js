import React from "react"
import {
  SiTwitter,
  SiGithub,
  SiLinkedin,
  SiDatacamp,
  SiFreecodecamp
} from "react-icons/si"
import { Container, Row, Col } from "react-bootstrap"

export default function Social() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <a href="https://www.linkedin.com/in/nazokat-isamova-30838799/">
              <SiLinkedin style={{ margin: `5`, color: `#000000` }} />
            </a>

            <a href="https://github.com/nisamova">
              <SiGithub style={{ margin: `5`, color: `#000000` }} />
            </a>

            <a href="https://twitter.com/NazokatIsamova">
              <SiTwitter style={{ margin: `5`, color: `#000000` }} />
            </a>
            <a href="https://www.freecodecamp.org/nazokat">
              <SiFreecodecamp style={{ margin: `5`, color: `#000000` }} />
            </a>
            <a href="https://www.datacamp.com/profile/isamova">
              <SiDatacamp style={{ margin: `5`, color: `#000000` }} />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  )
}
/**  */
