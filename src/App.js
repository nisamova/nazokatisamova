import Layout from "./components /Layout"
import Nasaimage from "./components /NasaImage"
import Articles from "./components /Articles"
import Githublogin from "./components /Githublogin"
import "bootstrap/dist/css/bootstrap.min.css"

function App(login) {
  return (
    <>
      <Layout>
        <Githublogin login="nisamova" />
        <Articles />
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
