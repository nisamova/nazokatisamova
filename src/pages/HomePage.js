import React from "react"
import Layout from "../components /Layout"
import Githublogin from "../components /Githublogin"
import Articles from "../components /Articles"
import NasaImages from "../components /NasaImages"
import HiroLottieAnimation from "../components /HiroLottieAnimation"

export default function HomePage() {
  return (
    <>
      <Layout>
        <HiroLottieAnimation />
        <Articles />
        <NasaImages />
      </Layout>
    </>
  )
}
