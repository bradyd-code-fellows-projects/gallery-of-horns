import React from 'react';
import './HornedBeasts.css'
import { Card, Button, Col } from 'react-bootstrap'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    }
  }


  favoriteVote = () => {
    this.setState({
      votes: this.state.votes + 1
    });
  };


  render() {
    return (
      <article>
        <Col className='mb-50'>
          <Card border='info' className='cards h-100'>
            <Card.Img variant="top" src={this.props.image_url} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                {this.props.description}
              </Card.Text>
              <div id="voteCounter">
                <Card.Text>❤️{this.state.votes}</Card.Text>
                <Button onClick={this.favoriteVote}>Vote as favorite</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </article>
    )
  }
}

export default HornedBeast;