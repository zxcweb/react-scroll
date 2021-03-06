import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import List from './List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="content">
          <List/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
