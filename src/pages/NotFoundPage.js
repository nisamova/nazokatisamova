import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import PageNotFoundAnimation from "../components /PageNotFoundAnimation"
import Layout from "../components /Layout"

export default function NotFoundPage() {
  return (
    <>
      <Layout>
        <Container
          style={{
            textAlign: `center`
          }}
        >
          <Row>
            <Col>
              <h1>Page does not Exist/ 404</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <PageNotFoundAnimation />
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}
