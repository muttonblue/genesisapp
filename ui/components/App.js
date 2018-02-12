import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <header>Navbar</header>
        {this.props.children}
      </div>
    )
  }
}

export default App