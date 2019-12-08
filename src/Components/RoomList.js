/******   Inline Style at the Bottom   ******/

import React from 'react';





const roomList= (props)=> {

  return <div style={style}>
           <ul style={listStyle}>
               <h3>Your Rooms:</h3>
               {props.rooms.map(room => {
                   const active= (props.roomId === room.id ? activeS : hrefStyle);
                   return (
                       <li key={room.id} style={active}>
                           <a onClick={()=> props.subscribeToRoom(room.id)}
                              href='#'
                              style={hrefStyle , active}>
                              # {room.name}
                            </a>
                       </li>
                   )
               })}
           </ul>
           </div>
}         
export default roomList;

/**********  CSS STYLE  **********/
/**** Container(div) Style ****/
const style= {
    width: '26%',
    height: '490px',
    backgroundColor: '#29a19c' ,
    color: 'white',
    margin: '1px',
    border: '1px solid gray',
    display: 'inline-block',
    textAlign: 'left'
}

/**** (ul) Style ****/
const listStyle={
    listStyleType: 'none'
}

/**** (li) Style ****/
const activeS={
    color: 'white'
}

/**** (a) Style ****/
const hrefStyle= {
    textDecoration: 'none',
    color: 'rgba(240, 245, 247, 0.404)'
}