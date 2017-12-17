import React, { Component } from 'react';
import {Element} from 'react-stylesheet';
import './App.css';
import Note from './components/Note'





class App extends Component { //main head
  constructor(props){
    super(props);
    this.state = {
      data: '',
      notes: [],
      code: 'Testing Database',
    }


  }

  updateNoteText(nText){
    this.setState({ data: nText.target.value})
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter'){
      let notesArr = this.state.notes;
      notesArr.push(this.state.data);
      this.setState({ data: ''});
      this.textInput.focus(); //refocus to the textarea
    }
  }

  handleSubmit(){
    this.setState({ code: 'Hi :)'})
  }


  deleteNote(index){
    let notesArr = this.state.notes;
    notesArr.splice(index, 1);
    this.setState({ notes: notesArr })
  }

  addNote(){
    if (this.state.data === '') {return false}

    let notesArr = this.state.notes;
    notesArr.push(this.state.data);
    this.setState({ data: ''});
    this.textInput.focus(); //refocus to the textarea
  }



  render() {

    let notes = this.state.notes.map((val, key) => {
      return <Note key={key} text={val}
                deleteMethod = { () => this.deleteNote(key) } />
    })

    return (
      <div className="container">
        <div className='header'>
            <img src={require('./image/christmasparrot.gif') }
              width = {30}
              height = {30}
           />
            Parrot.io
            <img src={require('./image/christmasparrot.gif') }
              width = {30}
              height = {30}
           />
        </div>
        {notes}

        <input type="text" //text
          ref={((input) => {this.textInput = input})}
          className = "textInput"
          value = {this.state.data}
          onChange = {nText => this.updateNoteText(nText)}
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

        <div className= 'btn' onClick = {this.addNote.bind(this)}>
          <Element
            width = {100}
            alignSelf = "center"
            background="black"
            backgroundOnHover="yellow"
            color="yellow"
            colorOnHover="red"
            padding={10}
            >
            Add
          </Element>
        </div>

      </div>



    );
  }
}



export default App;
