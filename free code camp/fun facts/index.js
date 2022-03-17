/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

// import React from "react"
// import ReactDOM from "react-dom"

function Reasons() {
  return (
    <div>
      <header>
        <nav>
          <img src="react-logo.png" width="40px"></img>
        </nav>
      </header>
      <h1>Reasons I'm happy to learn React</h1>
      <ol>
        <li>Makes my life easier</li>
        <li>Have better looking websites</li>
        <li>It looks like lot of fun</li>
      </ol>
      <footer>
        <p>© 2022 Charlotte J. development. All rights reserved.</p>
      </footer>
    </div>
  )
}



ReactDOM.render(<Reasons />, document.getElementById("root"))