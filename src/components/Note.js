import React, { Component } from 'react';
import {Element} from 'react-stylesheet';





class Note extends Component { //main head
  render() {
    return (
      <div className = "note" onClick = {this.props.deleteMethod}>
        {this.props.text}
      </div>
    );
  }
}



export default Note;
