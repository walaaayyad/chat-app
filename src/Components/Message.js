/******   Inline Style at the Bottom   ******/


import React from 'react'

const message= (props) => {
    return(
        <div>
            <div>{props.user}</div>
            <div style={msgStyle}>{props.text}</div>
        </div>
    )
}

export default message;

/******* CSS STYLE *******/
const msgStyle= {
    backgroundColor:'#9dd8c8',
    display: 'inline-block',
    marginLeft: '5px',
    borderRadius: '30%',
    padding: '10px',
 
   
}
