import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar'
import About from './components/about'
import Container from './components/container'
import Projects from './components/projects'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="float-in">
        <About />
        </div>
          <Container />
          <Projects />
          <Footer />
      </div>
    );
  }
}

export default App;
