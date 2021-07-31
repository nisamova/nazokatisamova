import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Social from "./Social"

export default function Layout({ children }) {
  return (
    <>
      <Social />
      <Header />
      {children}
      <Footer />
    </>
  )
}

/*** 
 * <div
        style={{
          margin: `auto`,
          maxWidth: 1500,
          justifyContent: `center`
        }}
      >
 */
