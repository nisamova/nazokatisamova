import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Githublogin from "./Githublogin"

export default function Layout({ children, login }) {
  return (
    <>
      <Header />
      <Githublogin login="nisamova" />
      <div
        style={{
          margin: `auto`,
          maxWidth: 1500,
          justifyContent: `center`
        }}
      >
        {children}
        <Footer />
      </div>
    </>
  )
}
