import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Articles() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "http://nazokatisamova.local/wp-json/wp/v2/posts"
      ).then(response => response.json())
      setData(result)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Articles</h1>
      {data.map(article => (
        <div key={article.id}>
          <Link to={`/article/${article.id}`}>
            <h2>{article.title.rendered}</h2>
          </Link>
          {article.excerpt.rendered}
        </div>
      ))}
    </div>
  )
}

export default Articles

/*import React from "react"
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
      <Container>
        <Col>
          <ul>
            {data.map(article => (
              <div>
                <h1>{article.name}</h1>
              </div>
            ))}
          </ul>
        </Col>
      </Container>
    </Row>
  )
} **/
