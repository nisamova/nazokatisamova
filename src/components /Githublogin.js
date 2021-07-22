import React from "react"
import { useFetch } from "./useFetch"
import { Image, Col, Row, Container } from "react-bootstrap"
import HiroLottieAnimation from "./HiroLottieAnimation"
import {
  IoAttachSharp,
  IoLocationOutline,
  IoGitBranchOutline
} from "react-icons/io5"
import { SiFreecodecamp, SiDatacamp } from "react-icons/si"

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
          backgroundImage: `linear-gradient(to right, rgba(245, 202, 195), rgba(242, 132, 130))`,
          maxWidth: `100%`
        }}
      >
        <Row>
          <Col>
            <Image
              src={data.avatar_url}
              alt={data.login}
              roundedCircle
              height={100}
              width={100}
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
            <IoAttachSharp /> Resume <br />
            <SiFreecodecamp
              size={30}
              style={{ margin: `5`, color: `#f28482` }}
            />
            <SiDatacamp size={30} style={{ margin: `5`, color: `#f28482` }} />
          </Col>
          <Col>
            <HiroLottieAnimation />
          </Col>
        </Row>
      </Container>
    </>
  )
}
