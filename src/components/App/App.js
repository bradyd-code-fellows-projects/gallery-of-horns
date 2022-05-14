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
    let selected = e.target.value;
    console.log(selected);
    if (selected === '1') {
      //return beasts with 1 horns
      let oneHorn = data.filter(num => num.horns === 1);
      console.log(oneHorn);
      this.setState({ data: oneHorn })
    } else if (selected === '2') {
      //return beasts with 2 horns
      let twoHorns = data.filter(num => num.horns === 2);
      this.setState({ data: twoHorns })
    } else if (selected === '3') {
      //return beasts with 3 horns
      let threeHorns = data.filter(num => num.horns === 3);
      this.setState({ data: threeHorns })
    } else if (selected === '100') {
      //return beasts with 100 horns
      let oneHundredHorns = data.filter(num => num.horns === 100);
      this.setState({ data: oneHundredHorns })
    } else {
      // return all beasts
      this.setState({ data: data })
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