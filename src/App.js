import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./components /Header"
import Footer from "./components /Footer"
import HiroLottieAnimation from "./components /HiroLottieAnimation"
import Nasaimage from "./components /NasaImage"

function App() {
  return (
    <>
      <Header />
      <HiroLottieAnimation />
      <Nasaimage />
      <Footer />
    </>
  )
}
export default App

/*
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" component={HomePage} exact />
        <Footer />
      </div>
    </Router>
  )
*/
