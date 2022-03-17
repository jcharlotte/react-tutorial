// import React from "react"
// import ReactDOM from "react-dom"

/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/

function Header() {
  return (
    <header>
      <nav>
        <img src="react-logo.png" width="40px" />
      </nav>
    </header>
  )
}

function Main() {
  return (
    <div>
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
    <footer>
      <small>© 2022 Charlotte J. development. All rights reserved.</small>
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