import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Components/navigation/navigation';

class App extends Component {
  render() {
    return <div>
      <Navigation />
    </div>;
  }
}

export default App;