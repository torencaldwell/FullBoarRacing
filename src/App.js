import React, { Component } from 'react';
import './App.css';
import { AppFrame } from './Components';
import { Dashboard, Recordings, GPSMap } from './Pages';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import mqtt from 'mqtt';


class App extends Component {


  componentDidMount() {
    var client = mqtt.connect('ws://localhost', {
      port: 8080,
      reconnectPeriod: 5000
    });

    console.log(client);

    client.on('connect', () => {
      client.subscribe('device', (err) => {
        if(!err){
          console.log("Sending");
          client.publish('device', 'Testing');
        }
      });
    });

    client.on('message', (topic, message) => {
      console.log(message.toString());
      client.end()
    })
  }

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
