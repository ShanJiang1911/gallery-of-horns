import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import HornedBeast from './HornedBeast.js';


class App extends React.Component {
  render() {
    return (
      <>
        <Header title="Welcome to The HornedBeast Kingdom"/>
        <Main />
        <Footer author="Shan@2021"/>
      </> 
    )
  }
}


export default App;
