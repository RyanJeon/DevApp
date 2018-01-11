import React from 'react';

const SignInB = (props) => {
  const { otherLabel, gotoLink, history} = props;
  return(
    <div className = "d-flex justify-content-between">
      <button type = "button" className = "btn btn-info" onClick = {() => history.push(gotoLink)}
        >{otherLabel}</button>
    </div>
  )
}

export default SignInB;
