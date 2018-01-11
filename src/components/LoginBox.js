import React, {Component} from 'react';
import BackButton from './BackButton';

export default class LoginBox extends Component{
    render(){
      const {title, body, footer, link} = this.props;
      return(
        <div className = "container">
                <div className = "card-title text-center">
                  {title}
                </div>
                <div className = "card-body">
                  {body}
                </div>
                {footer && <div className = "card-footer">
                  {footer}
                </div>}
        </div>
      )
    }
}

//<LoginBox title = "Title" body = {this.renderBody()} />
