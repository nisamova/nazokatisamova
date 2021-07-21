import React from "react"
import Focus from "./Focus"
import Footer from "./Footer"
import Header from "./Header"

export default function Layout({ children }) {
  return (
    <div
      style={{
        margin: `auto`,
        maxWidth: 1500,
        justifyContent: `center`
      }}
    >
      <Focus />
      <Header />
      {children}
      <Footer />
    </div>
  )
}
