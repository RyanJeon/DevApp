import React, { Component } from 'react';
import logo from './logo.svg';
import {Element} from 'react-stylesheet';
import './App.css';





class App extends Component { //main head
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={require('./image/christmasparrot.gif') }
            width = {100}
            height = {100}
         />
          <h1 className="App-title">Parrot.io!!</h1>
        </header>
        <p className="App-intro">
          Want to Find a place to be :) ? Well you are in the right place!
        </p>

        <h3> Testing database </h3>
        <h10> Insert Data Here </h10>


        <form>
          <textarea
            placeholder="Type in your answer "
            cols = "100"
            rows =  "10"
            ref = "Answer"
          />
          <button onClick = {this.handleSubmit}>Submit Answer</button>

        </form>
        <Element
          width = {100}
          alignSelf = "center"
          background="black"
          backgroundOnHover="yellow"
          color="yellow"
          colorOnHover="red"
          padding={10}
          >
          Dev
        </Element>


      </div>



    );
  }
}



export default App;
