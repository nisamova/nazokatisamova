import React from "react"
import HomePage from "./pages/HomePage"
import ArticlePage from "./pages/ArticlePage"
import NotFoundPage from "./pages/NotFoundPage"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/articles" component={ArticlePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  )
}
export default App
