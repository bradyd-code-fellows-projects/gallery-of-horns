import React from 'react';
import Header from '../../Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import data from '../../data/data.json'
import SelectedBeast from '../SelectedBeast/SelectedBeast.js';


import './App.css';

class App extends React.Component {

  render() {
    return (
      <>

        <Header />
        <Main
          data={data}
          openModalHandler={this.openModalHandler}
        />
        <Footer />
        <SelectedBeast />

      </>
    );
  }
}

export default App;