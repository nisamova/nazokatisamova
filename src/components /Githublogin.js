import React from "react"
import { useFetch } from "./useFetch"
import { Image, Col, Row, Container } from "react-bootstrap"
export default function Githublogin({ login }) {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  )
  if (loading) return <h1>Loading...</h1>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  return (
    <>
      <Container
        fluid
        style={{
          textAlign: `center`,
          maxWidth: `100%`
        }}
      >
        <Row>
          <Col>
            <Image
              src={data.avatar_url}
              alt={data.login}
              roundedCircle
              height={50}
              width={50}
            />
          </Col>
          <Col>{data.name}</Col>
        </Row>
      </Container>
    </>
  )
}
/** 
 * import {
  IoAttachSharp,
  IoLocationOutline,
  IoGitBranchOutline
} from "react-icons/io5"
 * <div>
              <IoLocationOutline style={{ margin: `5`, color: `#f28482` }} />
              &nbsp;{data.location}
            </div>
            <div>
              {" "}
              <IoGitBranchOutline style={{ margin: `5`, color: `#f28482` }} />
              Github Repositories: {data.public_repos}
            </div>
            <div>
              <IoAttachSharp style={{ margin: `5`, color: `#f28482` }} /> Resume{" "}
              <br />
            </div> */
