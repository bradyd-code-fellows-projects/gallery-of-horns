import React from 'react';
import './HornedBeasts.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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
        <Card style={{ width: '18rem' }}>
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
      </article>
      // <article>
      //   <h2>{this.props.title}</h2>
      //   <p>❤️{this.state.votes} favorited</p>
      //   <img onClick={this.favoriteVote}
      //   src={this.props.image_url}
      //   alt={this.props.alt}
      //   title={this.props.imgTitle} 
      //   />
      //   <p>{this.props.description}</p>
      // </article>
    )
  }
}

export default HornedBeast;