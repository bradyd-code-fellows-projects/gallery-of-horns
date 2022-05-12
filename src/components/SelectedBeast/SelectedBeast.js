import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../HornedBeast/HornedBeast.js';


class SelectedBeast extends React.Component {

  render() {
    return (
      <>
        <Modal
          show={this.props.modalIsDisplaying}
          onHide={this.props.closeModalHandler}
        > <Modal.Header closeButton>
            <Modal.Title>{this.props.SelectedBeast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img variant="top" src={this.props.SelectedBeast.image_url} alt={this.props.SelectedBeast.title} />
            <p>
              {this.props.SelectedBeast.description}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.props.closeModalHandler}>Close</Button>
          </Modal.Footer>

        </Modal>
      </>
    );
  }
}

export default SelectedBeast