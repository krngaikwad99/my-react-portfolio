import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NoMatch extends Component {
  render() {
      return(
        <div className="NoMatch">
            <h1> <Link to="/Landingpage">Click this link to go to my homepage!</Link> </h1>
        </div>
    )
  };
}

export default NoMatch;