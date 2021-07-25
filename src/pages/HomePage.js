import React from "react"
import Layout from "../components /Layout"
import Githublogin from "../components /Githublogin"
import Nasaimage from "../components /NasaImage"
import Articles from "../components /Articles"

export default function HomePage() {
  return (
    <>
      <Layout>
        <Githublogin login="nisamova" />
        <Articles />
        <Nasaimage />
      </Layout>
    </>
  )
}
