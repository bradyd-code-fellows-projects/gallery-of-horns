import React from 'react';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import data from '../../data/data.json'
import SelectedBeast from '../SelectedBeast/SelectedBeast.js';
import HornsForm from '../HornsForm/HornsForm.js';


import '../App/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsDisplaying: false,
      SelectedBeast: {}
    }
  }

  openModalHandler = (title, image_url, description) => {
    let beast = {
      modalIsDisplaying: true,
      title: title,
      image_url: image_url,
      description: description
    }

    this.setState({
      modalIsDisplaying: true,
      SelectedBeast: beast
    })
  };

  closeModalHandler = () => {
    this.setState({
      modalIsDisplaying: false
    });
  }


  render() {
    return (
      <>

        <Header />
        <HornsForm
          data={data}
        />
        <Main
          data={data}
          openModalHandler={this.openModalHandler}
        />
        <Footer />
        <SelectedBeast
          modalIsDisplaying={this.state.modalIsDisplaying}
          SelectedBeast={this.state.SelectedBeast}
          closeModalHandler={this.closeModalHandler}
        />

      </>
    );
  }
}

export default App;