import React from 'react';


export const Input =(props) => { 
    return <input  className ="input" type="text" value={props.value } onChange={props.change} />
}