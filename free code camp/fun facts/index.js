// import React from "react"
// import ReactDOM from "react-dom"

/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
*/

function Header() {
  return (
    <header className="header shadow">
      <nav className="nav container">
        <div><img src="react-logo.png" className="logo" /></div>
        <div>
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

function Main() {
  return (
    <div className="container main">
      <h1>Reasons I'm happy to learn React</h1>
      <ol>
        <li>Makes my life easier</li>
        <li>Have better looking websites</li>
        <li>It looks like lot of fun</li>
      </ol>
    </div>

  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <small>© 2022 Charlotte J. development. All rights reserved.</small>
      </div>
    </footer>
  )
}

function Page() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}



ReactDOM.render(<Page />, document.getElementById("root"))