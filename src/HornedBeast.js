import React from 'react';
import Button from 'react-bootstrap/Button';
import './HornedBeast.css';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberVote: 0,
      heart: ' '
    }
  }

  increaseNumberVote = () => {
    this.setState({
      numberVote: this.state.numberVote + 1,
      like: true
    });
  }


  addHeart = () => {
    this.setState({
      heart: "https://iconarchive.com/download/i82801/succodesign/love-is-in-the-web/heart.ico"
    });
  }


  render () {
    return (
      <Card id={this.props.title}>
          <Card.Img variant="top" onClick = {(e) => {this.addHeart(); this.increaseNumberVote();}} alt={this.props.alt} title={this.props.title} src={this.props.src} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Footer>{this.state.numberVote} <Card.Img alt='Heart' title='Like me!' src="https://iconarchive.com/download/i82801/succodesign/love-is-in-the-web/heart.ico" /></Card.Footer>
          </Card.Body>
          {/* <h2>{this.props.title}</h2>
          <img src={this.props.src} 
          alt={this.props.title}></img>
          <p>{this.props.description}</p>
          <h3>{this.state.numberVote}</h3>
          
          <Button  variant="outline-info" onClick={this.decreaseNumberVote}>Not my type</Button> */}
      </Card>
    )
  }
}


export default HornedBeast;

