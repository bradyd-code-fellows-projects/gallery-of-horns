import React from 'react';
import { Modal } from 'react-bootstrap';
import '../HornedBeast/HornedBeast.js';


class SelectedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalIsDisplaying: false,
      title: ''
    }
  }

  openModalHandler = (title) => {
    this.setState({
      modalIsDisplaying: true,
      title: title
    });
  }

  closeModalHandler = () => {
    this.setState({
      modalIsDisplaying: false
    });
  }

  render() {
    return (
    <>
      <Modal
        show={this.state.modalIsDisplaying}
        onHide={this.closeModalHandler}
      >
        <Modal.Title>{this.state.title}</Modal.Title>
      </Modal>
    </>
    
    );
  }

}

export default SelectedBeast