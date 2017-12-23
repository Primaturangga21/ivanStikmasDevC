import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      const name = "Ivan Primaturangga";
      const github = "https://github.com/Primaturangga21";
    return (
      <div className="App">
        <header className="App-header-left">
          <img src={logo} className="App-logo-big" alt="logo" />
          <br />
          <h1 className="App-title">My Name : { name }</h1>
          <br />
          <h1 className="App-title">My Github : <a href="https://github.com/Primaturangga21">Visit This..</a></h1>
        </header>
        <header className="App-header-right">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Heyy Contact Me for Another Question</h1>
          <table className="App-table">
            <tr>
              <td>Your Name : </td>
              <td><input type="text" className="App-input" placeholder="Type your Name here.." /></td>
            </tr>
            <tr>
              <td>Your Email : </td>
              <td><input type="text" className="App-input" placeholder="Type your Email here.." /></td>
            </tr>
            <tr>
              <td>Subject : </td>
              <td><input type="text" className="App-input" placeholder="Type your Subject here.." /></td>
            </tr>
            <tr>
              <td>Question : </td>
              <td><textarea className="App-textarea" placeholder="Type your Question Here..."></textarea></td>
            </tr>
          </table>
        </header>
        <p className="App-intro">
            
          </p>
      </div>
    );
  }
}

export default App;
