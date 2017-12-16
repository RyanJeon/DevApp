import React, { Component } from 'react';
import logo from './logo.svg';
import {Element} from 'react-stylesheet';
import './App.css';





class App extends Component { //main head
  constructor(props){
    super(props);
    this.state = {
      data: '',
    }


  }

  updateNoteText(nText){
    this.setState({ data: nText.target.value})
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter'){

    }
  }



  render() {
    return (
      <div className="container">
        <div className='header'>Parrot.io</div>
        <header className="App-header">
          <img src={require('./image/christmasparrot.gif') }
            width = {100}
            height = {100}
         />
        </header>

        <p className="App-intro">
          Want to Find a place to be :> ? Well you are in the right place!
        </p>

        <h3> Testing database! </h3>
        <h10> Insert Data Here! </h10>

        <input type="text??"
          ref={((inputz) => {this.textInputo = inputz})}
          className = "textInputing"
          value = {this.state.data}
          onChangeText = {nText => this.updateNoteText(nText)}
          onKeyPress = {this.handleKeyPress.bind(this)}
        />

        <form>
          <textarea
            placeholder="Type in your answer "
            cols = "100"
            rows =  "10"
            ref = "Answer"
          />
          <button onClick = {this.handleSubmit}>Submit Answer</button>
        </form>

        <div className= 'btn'>
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


      </div>



    );
  }
}



export default App;
