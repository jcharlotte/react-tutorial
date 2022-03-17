import React from "react"

export default function Header() {
    return (
      <header className="header shadow">
        <nav className="nav container">
          <div><img src="./react-logo.png" className="logo" /></div>
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