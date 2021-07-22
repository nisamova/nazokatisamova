import React from "react"
import { SiTwitter, SiGithub, SiLinkedin } from "react-icons/si"
import { Container, Row, Col } from "react-bootstrap"

export default function Social() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <SiLinkedin style={{ margin: `5` }} />
            <SiGithub style={{ margin: `5` }} />
            <SiTwitter style={{ margin: `5` }} />
          </Col>
        </Row>
      </Container>
    </>
  )
}
