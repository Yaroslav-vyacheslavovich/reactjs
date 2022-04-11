import React from 'react';



export const Button = (props) =>{ 
  return <a className = "green" onClick={props.click} onSubmit={props.submit}>{props.name}</a>
}