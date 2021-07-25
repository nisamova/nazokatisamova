import React from "react"
import { useFetch } from "./useFetch"
import { Container, Row, Col, Image, Card } from "react-bootstrap"

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
          <Card>
            <Image
              src={data.url}
              alt={data.title}
              height={400}
              width={400}
              fluid
            />
            <Card.Body>
              <Card.Title>
                <h4>{data.title}</h4>
                <p>{data.description}</p>
                <p>{data.date}</p>
              </Card.Title>
              <Card.Text>
                <p>{data.explanation}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Image
              src={data.url}
              alt={data.title}
              height={400}
              width={400}
              fluid
            />
            <Card.Body>
              <Card.Title>
                <h4>{data.title}</h4>
                <p>{data.description}</p>
                <p>{data.date}</p>
              </Card.Title>
              <Card.Text>
                <p>{data.explanation}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Image
              src={data.url}
              alt={data.title}
              height={400}
              width={400}
              fluid
            />
            <Card.Body>
              <Card.Title>
                <h4>{data.title}</h4>
                <p>{data.description}</p>
                <p>{data.date}</p>
              </Card.Title>
              <Card.Text>
                <p>{data.explanation}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
