import React, {Component} from 'react';
import LoginBox from '../components/LoginBox';
import InputField from '../components/InputField';
import FooterButton from '../components/FooterFormButton';

export default class CreateAccount extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
  renderBody(){
    return(
      <div>
        <InputField id = "email" type = "text" label="E-mail"
        inputAction = {(event) => this.setState({email : event.target.value})}/>
        <InputField id = "password" type = "password" label="Password"
        inputAction = {(event) => this.setState({password : event.target.value})}/>
        <InputField id = "confirm-password" type = "password" label="Confirm Password"
        inputAction = {(event) => this.setState({confirmPassword : event.target.value})}/>
        <FooterButton submitLabel = "Create Account" otherLabel = "Go Back" gotoLink = "/Login"
        {...this.props}/>

      </div>
    );
  }
  render(){
    return(
      <div>
        <LoginBox body = {this.renderBody()} title = "Create Account"/>
      </div>
    )


  }
}
