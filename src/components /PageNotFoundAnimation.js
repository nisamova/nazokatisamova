import React from "react"
import Lottie from "react-lottie"
import animationData from "../lotties/elegant-girl-on-the-bicycle.json"
import { Container, Row, Col } from "react-bootstrap"

const defaultOptions = {
  loop: true,
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
