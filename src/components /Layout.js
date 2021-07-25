import React from "react"
import Footer from "./Footer"
import Header from "./Header"

export default function Layout({ children, login }) {
  return (
    <>
      <Header />
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
