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
      SelectedBeast: {},
      data: data
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

  handleSelect = (e) => {
    let selected = parseInt(e.target.value);
    if (!isNaN(selected)) {
      let horns = data.filter(num => num.horns === selected);
      this.setState({ data: horns })
    } else {
      this.setState({data: data})
    }
  }

  render() {
    return (
      <>

        <Header />
        <HornsForm
          handleSelect={this.handleSelect}
        />
        <Main
          data={this.state.data}
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