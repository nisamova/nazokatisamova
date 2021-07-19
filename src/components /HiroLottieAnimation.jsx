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
    <Container>
      <Row>
        <Col>
          <Lottie options={defaultOptions} height={300} width={450} />
        </Col>
        <Col>
          <h1>Nazokat Isamova</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default HiroLottieAnimation
