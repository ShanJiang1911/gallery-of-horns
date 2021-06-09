import React from 'react';
import HornedBeast from './HornedBeast';
import triceratops from './Images/triceratops.jpg';

class Main extends React.Component {
    render() {
      return (
        <>
          <HornedBeast title="Buffalo" imageUrl="https://image.freepik.com/free-photo/closeup-shot-obstinacy-buffalo-green-field-sunny-day_181624-30827.jpg" description="This is wild Buffalo"/>
          <HornedBeast title="Triceratops" imageUrl={triceratops} description="This is a dinosaur" />
        </> 
      )
    }
}
  
  
export default Main;
