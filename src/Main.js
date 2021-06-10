import React from 'react';
import Beast from './HornedBeast.js';
import data from './resources/data.json';
import CardColumns from 'react-bootstrap/CardColumns';


class Main extends React.Component {
    render() {
      return (
        <div className="Main">
          <CardColumns className="Beast">
            {data.map(beast => (
              <Beast alt={beast.title} title={beast.title} src={beast.image_url} description={beast.description} />
            ))
            }
          </CardColumns>
        </div>
      )
    }
}
  
  
export default Main;
