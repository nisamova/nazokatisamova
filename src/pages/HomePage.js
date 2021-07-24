import React from "react"
import Layout from "../components /Layout"
import Nasaimage from "../components /NasaImage"
import Articles from "../components /Articles"

export default function HomePage() {
  return (
    <>
      <Layout>
        <Articles />
        <Nasaimage />
      </Layout>
    </>
  )
}
