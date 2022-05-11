import React from 'react'
import './Header.css'

class Header extends React.Component {

  render() {
    return (
      <header>
        <h1>Gallery of Horns</h1>
        <h2>Click on an image to vote for it as your favorite!</h2>
      </header>
    );
  }
}

export default Header;