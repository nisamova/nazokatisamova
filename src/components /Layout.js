import React from "react"
import Footer from "./Footer"
import Header from "./Header"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 1400, padding: `0 1rem` }}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
