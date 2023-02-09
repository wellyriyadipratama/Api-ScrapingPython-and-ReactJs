import React, { Component } from 'react';
import Navbar from './views/Navbar';
// import Tbl from './views/Tbl';
import './views/style.css';
import API from './views/API';

class App extends Component {
  render() {
    return (
      <div className="App">
            <div className="wrapper-navbar">
              <Navbar/>
              {/* <Tbl/> */}
              <API/>
            </div>
      </div>
    );
  }

}

export default App;

