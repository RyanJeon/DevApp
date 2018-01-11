import React, {Component} from 'react';
import LoginBox from './LoginBox';
import InputField from './InputField';
import FooterButton from './/FooterFormButton';
import { login, getUser} from '../Actions/UserAction';
import {connect } from 'react-redux';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  componentWillMount(){
    this.props.getUser();
  }

  //componentWillReceiveProps(nextProps){
  //  if(nextProps.user.email !== undefined ){
  //    this.props.history.push('/');
  //  }
  //}

  submitLogin(event){
    event.preventDefault();
    this.props.login(this.state.email, this.state.password).catch(err => {console.log(err);});

  }

  renderBody(){
    return(
    <form onSubmit={event => {this.submitLogin(event)}}>
        <div>
          <InputField id = "email" type = "text" label="E-mail"
          inputAction = {(event) => this.setState({email : event.target.value})}/>
          <InputField id = "password" type = "password" label="Password"
          inputAction = {(event) => this.setState({password : event.target.value})}/>
          <FooterButton submitLabel = "Sign in" otherLabel = "Create Account" gotoLink = "/CreateAccount"
          {...this.props}/>
          </div>
    </form>
    );
  }
  render(){
    //console.log(this.state) check if it works
    return(
      <div>
        <LoginBox title = "Sign In"
                  body = {this.renderBody()}
                  link = '/ListPost'
                  {...this.props}
                  /*footer = "Sick"*//>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {user: state.user};
}

export default connect(mapStateToProps, {login, getUser })(Login);
