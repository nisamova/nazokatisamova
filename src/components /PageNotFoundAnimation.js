import React from "react"
import Lottie from "react-lottie"
import animationData from "../lotties/cat404page.json"
import { Container, Row, Col } from "react-bootstrap"

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}

export default function PageNotFoundAnimation() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Lottie
              options={defaultOptions}
              style={{ maxWidth: `100%`, maxHeight: `100%` }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
