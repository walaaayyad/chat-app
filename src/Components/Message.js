import React from 'react'
/******* CSS STYLE *******/
const msgStyle= {
    backgroundColor:'#9dd8c8',
    display: 'inline-block',
    marginLeft: '5px',
    borderRadius: '20px',
    padding: '10px 20px ',
 
   
}
/******************************************/
        const message= (props) => {
            return(
                <div>
                    <div>{props.user}</div>
                    <div style={msgStyle}>{props.text}</div>
                </div>
            )
        }

        export default message;

