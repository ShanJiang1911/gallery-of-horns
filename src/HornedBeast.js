import React from 'react';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberVote: 0
    }
  }

  increaseNumberVote = () => {
    this.setState({
      numberVote: this.state.numberVote + 1,
      like: true
    });
  }

  decreaseNumberVote = () => {
    this.setState({
      numberVote: this.state.numberVote - 1
    });
  }


  render () {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} 
        alt={this.props.title}></img>
        <p>{this.props.description}</p>
        <h3>{this.state.numberVote}</h3>
        <Button  variant="outline-warning" onClick={this.increaseNumberVote}>I like it!</Button>
        <Button  variant="outline-info" onClick={this.decreaseNumberVote}>Not my type</Button>
      </>
    )
  }
}


export default HornedBeast;

