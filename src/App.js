import Layout from "./components /Layout"
import HiroLottieAnimation from "./components /HiroLottieAnimation"
import Nasaimage from "./components /NasaImage"
import Articles from "./components /Articles"
import Githublogin from "./components /Githublogin"

function App(login) {
  return (
    <>
      <Layout>
        <Articles />
        <HiroLottieAnimation />
        <Githublogin login="nisamova" />
        <Nasaimage />
      </Layout>
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
