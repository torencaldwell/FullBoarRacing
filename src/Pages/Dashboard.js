import React, { Component } from 'react';
import colors from '../res/colors';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import mqtt from 'mqtt';

class Dashboard extends Component {

  state = {
    incoming : ""
  };

  bin2string(array) {
    var result = "";
    for(var i=0; i< array.length; i++){
      result += String.fromCharCode(array[i]);
    }
    return result;
  }

  componentDidMount() {
    var client = mqtt.connect('ws://10.42.0.166', {
      port: 8080,
      reconnectPeriod: 5000
    });

    client.on('connect', () => {
      console.log("MQTT CONNECTED!");

      client.subscribe('device', () => {
        console.log("subscribed to device");
      })
    });


    client.on('message', function(topic, message) {
      this.setState({incoming: this.bin2string(message)});
    }.bind(this));
  }


  render() {
    return(
      <p>{this.state.incoming}</p>
    );
  }
};

export { Dashboard };
