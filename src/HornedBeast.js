import React from 'react';
import './HornedBeasts.css'

class HornedBeast extends React.Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <img
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