import logo from "../logo.svg"

import "./Header.css"

function Header() {
  return (
    <div className="App">
      <header className="Flower-wreath">
        <img src={logo} className="Flower-logo" alt="logo" />
      </header>
    </div>
  )
}

export default Header
