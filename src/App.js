import React, { Component } from 'react';
import {Element} from 'react-stylesheet';
import './App.css';
import Note from './components/Note'
import _ from 'lodash';
import {connect} from 'react-redux';
import {getPosts} from './Actions/PostActions';
import {Field, reduxForm, reset} from 'redux-form';





class App extends Component { //main head
  constructor(props){
    super(props);
    this.state = {
      posts: {'Lol': {title: 'Title', body: 'body'}},

      welcome_text: 'Please Login Below',

      user_interface:  [],

      username: '',
      password: '',

      user_: '',
      pass_: '',

      data: '',
      notes: [],
      code: 'Testing Database',
    }


  }

  componentWillMount(){
    this.props.getPosts();
  }

  renderPosts(){
    return _.map(this.props.posts, (post, key) => {
      return(
        <div key={key}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      );
    });
  }


  //Will Handle comments
  updateNoteText(nText){
    this.setState({ data: nText.target.value})
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter'){
      if (this.state.data === '') {return false}

      let notesArr = this.state.notes;
      notesArr.push(this.state.data);
      this.setState({ data: ''});
      this.textInput.focus(); //refocus to the textarea
    }
  }

  handleSubmit(){
    //  console.log('Success!');
    this.setState({ code: 'Hi :)'});
    //this.answers.focus();
  }

  //^^Handle comments


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

  updatePassword(text){
    this.setState({password: text.target.value})
  }

  updateUsername(text){
    this.setState({username: text.target.value})
  }

  updateInformation(){
    if (this.state.username === '' || this.state.password === '') {return false}

    this.setState({user_: this.state.username, pass_: this.state.password})
    this.setState({welcome_text: 'Welcome!', username: '', password: ''}) //reset the textx
    this.username.focus();
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

        <input type="text" //text
          ref={((input) => {this.textInput = input})}
          className = "textInput"
          value = {this.state.data}
          onChange = {nText => this.updateNoteText(nText)}
          onKeyPress = {this.handleKeyPress.bind(this)}
        />

        <div className = 'answer'>
            <h3> {this.state.code} </h3>
            <h3> _______________</h3>
            <h2> {this.state.welcome_text} </h2>
            <h4> {this.state.user_} </h4>
            <h4> {this.state.pass_} </h4>

            {this.renderPosts()}

            <h3> Username </h3>

            <input type = "text"
                  placeholder = "username"
                  className = "username"
                   ref = {((input) => {this.username  = input})}
                   value = {this.state.username}
                   onChange = {text => this.updateUsername(text)}
            />
            <h3> Password </h3>
            <input type = "text"
              className = "password"
              placeholder = "password"
               ref = {((input) => {this.password  = input})}
               value = {this.state.password}
               onChange = {text => this.updatePassword(text)}
            />

            <div>
              <button onClick = {this.updateInformation.bind(this)}>
                Register
              </button>
            </div>
        </div>

        {notes}

        <div className= 'btn' onClick = {this.addNote.bind(this)}>
          <Element
            width = {300}
            alignSelf = "center"
            background="blue"
            backgroundOnHover="light blue"
            color="white"
            colorOnHover="white"
            padding={10}
            >
            Add Comment
          </Element>
        </div>

      </div>



    );
  }
}

let form = reduxForm({
  form: 'NewPost'
})(App);

form = connect(state => ({
  posts: state.posts
}), {getPosts} )(form);

export default form;
