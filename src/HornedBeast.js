import React from 'react';
import './HornedBeasts.css'

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
        <h2>{this.props.title}</h2>
        <p>❤️{this.state.votes} favorited</p>
        <img onClick={this.favoriteVote}
        src={this.props.image_url}
        alt={this.props.alt}
        title={this.props.imgTitle} 
        />
        <p>{this.props.description}</p>
      </article>
    )
  }
}

export default HornedBeast;