import React from "react"
import Layout from "../components /Layout"
import Articles from "../components /Articles"
import NasaImage from "../components /NasaImage"

function ArticlePage() {
  return (
    <>
      <Layout>
        <NasaImage />
        <Articles />
      </Layout>
    </>
  )
}

export default ArticlePage
