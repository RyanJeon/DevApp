import React, {Component} from 'react';
import LoginBox from '../components/LoginBox';
import InputField from '../components/InputField';
import FooterButton from '../components/FooterFormButton';

export default class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  renderBody(){
    return(
      <div>
        <InputField id = "email" type = "text" label="E-mail"
        inputAction = {(event) => this.setState({email : event.target.value})}/>
        <InputField id = "password" type = "password" label="Password"
        inputAction = {(event) => this.setState({password : event.target.value})}/>
        <FooterButton submitLabel = "Sign in" otherLabel = "Create Account" gotoLink = "/CreateAccount"
        {...this.props}/>

      </div>
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
