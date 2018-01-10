import React, {Component} from 'react';

export default class LoginBox extends Component{
    render(){
      const {title, body, footer} = this.props;
      return(
        <div className = "container">
          <div className = "d-flex justify-content-center align-self-center">
            <div className = "card col-sm-6">
              <div className = "card-block">
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
            </div>
          </div>
        </div>
      )
    }
}

//<LoginBox title = "Title" body = {this.renderBody()} />
