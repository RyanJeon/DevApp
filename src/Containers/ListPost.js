import React, { Component } from 'react';
import {Element} from 'react-stylesheet';
import '../App.css';
import _ from 'lodash';
import {connect} from 'react-redux';
import {getPosts, savePost, deletePost} from '../Actions/PostActions';
import {Field, reduxForm, reset} from 'redux-form';
import PostCard from '../components/PostCard';
import {getUser} from '../Actions/UserAction';
import SignInB from '../components/signinb';




class App extends Component { //main head
  constructor(props){
    super(props);
    this.state = {

      user_interface:  [],

    }


  }

  componentWillReceiveProps(nextProps){
    if(nextProps.user.loading === false && this.props.user.email === undefined){
      console.log('Not logged in');
      //this.props.history.replace('./Login');
    }
  }

  //comment
  componentWillMount(){
    this.props.getPosts();
    this.props.getUser();
  }

  renderPosts(){
    return _.map(this.props.posts, (post, key) => {
      return(
        <PostCard key={key}>
          <h3>{post.name}</h3>
          <p>{post.body}</p>
          <button onClick = {() => this.props.deletePost(key)}>
             Delete
          </button>
        </PostCard>
      );
    });
  }

  renderField(field){
    return (
      <input type = "text" {...field.input} placeholder = {'Please Enter a ' + field.label}/>
    )
  }


  handleSubmit(){
    //  console.log('Success!');
    this.setState({ code: 'Hi :)'});
    //this.answers.focus();
  }

  //^^Handle comments



  onSubmit(values){
    this.props.savePost(values).then(this.props.dispatch(reset('NewPost')));
  }



  render() {
    const {handleSubmit} = this.props;

    return (
      <div className="container">

        <div className='header'>
            <img src={require('../image/christmasparrot.gif') }
              width = {30}
              height = {30}
           />
            Parrot.io
            <img src={require('../image/christmasparrot.gif') }
              width = {30}
              height = {30}
           />

           <div className = "SignInWrapper"> 
             <SignInB otherLabel = "Sign In" gotoLink = './Login' {...this.props}/>
           </div>
        </div>


        <div className = "commentS">
          <h3 padding = {100}>Enter Your Comments!</h3>
          <h3> _____________ </h3>
        </div>

        <div className = "PostRender">
          <div>
            {this.renderPosts()}
          </div>
          <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}
                className = "tForm">
            <Field
              name = "name"
              component ={this.renderField}
              label = "Name"
              class = "" //css
            />
            <Field
              name = "body"
              component ={this.renderField}
              label = "Body"
              class = "" //css
            />
            <button type="submit">Post</button>
          </form>
        </div>

      </div>



    );
  }
}

let form = reduxForm({
  form: 'NewPost'
})(App);

form = connect((state, ownProps) => ({
  posts: state.posts,
  user: state.user
}), {getPosts, savePost, deletePost, getUser} )(form);

export default form;
