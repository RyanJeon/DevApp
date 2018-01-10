import React, {Component} from 'react';

export default class PostCard extends Component {
  render(){
    return(
      <div>
        <div className = "note">
          {this.props.children}
        </div>
      </div>
    )
  }
}
