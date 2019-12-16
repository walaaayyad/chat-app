//https://pusher.com/docs/chatkit/reference/javascript#user-presence

import React from 'react'
/**********  CSS STYLE  **********/
/**** Container(div) Style ****/
const style= {
    width: "20%",
    backgroundColor: '#29a19c' ,
    color: 'white',
    margin: '1px',
    border: '1px solid gray',

}
/**** online(li) Style ****/
const online={
    color: 'white'
}

/**** offline(li) Style ****/
const offline= {
    textDecoration: 'none',
    color: 'rgba(240, 245, 247, 0.404)'
}
//************************************************/
  
        const usersList =(props) =>{ 
        //console.log(`the current user ${props.users}`)
                
        return  <div style={style}>
                <h3> Users </h3>
                    <ul>
                        {props.users.map((user)=>{
                            const onlineState = (user.presence.state === 'online'? online : offline) // condition active style when the user is online
                            return(
                                    <li key={user.id}
                                    style={offline, onlineState}>
                                    {user.name}
                                    </li>
                            )
                        })}
                    </ul>
                </div>
            
                }

        export default usersList;

