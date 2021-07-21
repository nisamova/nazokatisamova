import React from "react"
import { useFetch } from "./useFetch"
import { Container, Row, Col } from "react-bootstrap"

export default function Articles() {
  const { loading, data, error } = useFetch(
    "http://nazokatisamova.local/wp-json/wp/v2/posts"
  )
  if (loading) return <h1> loading....</h1>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  return (
    <Row>
      <pre>{console.log}</pre>
    </Row>
  )
}
