import React from 'react';

const FooterButton = (props) => {
  const { submitLabel, otherLabel, gotoLink, history} = props;
  return(
    <div className = "d-flex justify-content-between">
      <button type = "submit" className = "btn btn-primary">{submitLabel}</button>
      <button type = "button" className = "btn btn-info" onClick = {() => history.push(gotoLink)}
        >{otherLabel}</button>
    </div>
  )
}

export default FooterButton;
