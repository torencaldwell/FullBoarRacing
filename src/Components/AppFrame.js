import React, { Component } from 'react';
import { MastHead } from './MastHead';
import { NavBar } from './NavBar';

class AppFrame extends Component {

  render() {
    return(
      <div>
        <MastHead>Full Boar Racing</MastHead>
        <NavBar />
      </div>
    );
  }
}

export { AppFrame };
