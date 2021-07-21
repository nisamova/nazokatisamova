import React from "react"
import { useFetch } from "./useFetch"
import { Image, Col, Row, Container } from "react-bootstrap"
import HiroLottieAnimation from "./HiroLottieAnimation"
import {
  IoAttachSharp,
  IoLocationOutline,
  IoGitBranchOutline
} from "react-icons/io5"

export default function Githublogin({ login }) {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  )
  if (loading) return <h1>Loading...</h1>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  return (
    <>
      <Container
        style={{
          textAlign: `center`,
          backgroundColor: `#f7ede2`,
          margin: `25px`
        }}
      >
        <Row>
          <Col>
            <Image
              src={data.avatar_url}
              alt={data.login}
              roundedCircle
              height={150}
              width={150}
            />{" "}
            {data.name && <p>{data.name}</p>}
            <p>
              <IoLocationOutline />
              &nbsp;{data.location}
            </p>
            <p>
              {" "}
              <IoGitBranchOutline />
              Github Repositories: {data.public_repos}
            </p>
            <IoAttachSharp /> Resume
          </Col>
          <Col>
            <HiroLottieAnimation />
          </Col>
        </Row>
      </Container>
    </>
  )
}
