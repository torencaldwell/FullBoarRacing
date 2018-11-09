import React, { Component } from 'react';
import './App.css';
import { AppFrame } from './Components';
import { Dashboard, Recordings, GPSMap } from './Pages';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import mqtt from 'mqtt';


class App extends Component {

  render() {
    return (
        <div className="App">
          <Router>
            <AppFrame/>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/recordings" component={Recordings} />
            <Route path="/gpsmap" component={GPSMap} />
          </Router>
        </div>
    );

  }
}

export default App;
