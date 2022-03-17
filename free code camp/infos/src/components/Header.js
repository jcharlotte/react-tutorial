import React from "react"
import reactLogo from "../img/react-logo.png"

export default function Header() {
  return (
    <header className="header shadow">
      <nav className="nav container">
        <div><img
          src={reactLogo}
          className="logo"
          alt="React Logo" />
        </div>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}


  // export default Header