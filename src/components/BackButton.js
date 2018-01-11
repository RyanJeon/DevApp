import React from 'react';

const BackButton = (props) => {
  const { gotoLink, history} = props;
  return(
    <div >
      <button type = "button" className = "Backbutton" onClick = {() => history.push(gotoLink)}
        >X</button>
    </div>
  )
}

export default BackButton;
