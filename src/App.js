import React, { Component } from 'react';
import './App.css';
import { AppFrame } from './Components';
import { Dashboard, Recordings, GPSMap} from './Pages';


class App extends Component {

  state = {
    page : <Dashboard/>
  }
  

  render() {
    return (
      <div className="App">
        <AppFrame/>
        {this.state.page}
      </div>
    );

  }
}

export default App;
