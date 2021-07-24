import React from "react"
import { useFetch } from "./useFetch"
import { Container, Row, Col, Image } from "react-bootstrap"

export default function Nasaimage() {
  const { loading, data, error } = useFetch(
    "https://api.nasa.gov/planetary/apod?api_key=vwr50SLzfJKOBvYEJyfoqSEpVbcjfGuq1JOoxgdm"
  )
  if (loading) return <h1> loading....</h1>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  return (
    <Container fluid>
      <Row>
        <Col>
          <Image
            src={data.url}
            alt={data.title}
            height={350}
            width={550}
            fluid
          />
        </Col>
        <Col>
          <p>{data.date}</p>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </Col>
      </Row>
    </Container>
  )
}
