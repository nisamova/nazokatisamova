import React from "react"
import Lottie from "react-lottie"
import animationData from "../lotties/motherhood-nature.json"
import { Container, Row, Col } from "react-bootstrap"

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}

function HiroLottieAnimation() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Lottie
            options={defaultOptions}
            style={{ maxWidth: `100%`, maxHeight: `70%` }}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default HiroLottieAnimation
