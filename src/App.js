import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import SelectedBeast from './SelectedBeast.js'
import Button from 'react-bootstrap/Button';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      shouldShowModal: false
    };
  }

  showModal = () => {
    this.setState({
      shouldShowModal: true
    });
  }

  hideModal = () => {
    this.setState({
      shouldShowModal: false
    })
  }


  render() {
    return (
      <>
        <Header title="Welcome to The HornedBeast Kingdom"/>
        <Button onClick={this.showModal}>SelectedBeast</Button>
        <SelectedBeast shouldShowModal={this.state.shouldShowModal} hideModal={this.hideModal} />
        <Main />
        <Footer author="Shan@2021"/>
      </> 
    )
  }
}


export default App;
