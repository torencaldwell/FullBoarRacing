import React, { Component } from 'react';
import colors from '../res/colors';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Dashboard extends Component {

  render(){
    return(
      <Link to="/dashboard">This is the dashboard</Link>

    );
  }
};

export { Dashboard };
