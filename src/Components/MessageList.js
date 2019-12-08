/******   Inline Style at the Bottom   ******/


import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Message from './Message'

 
class MessageList extends Component {
    /*Handle the scroll of Message List ( Autoscroll down when you write a new msg ) 
    & If you scrollup to read old msgs and someone send new msg the scroll not move to the bottom */
   componentWillUpdate() {
    const node= ReactDOM.findDOMNode(this)
    this.shouldScrollToBottom= node.scrollTop + node.clientHeight +100 >= node.scrollHeight 
   }

    componentDidUpdate() {
        if(this.shouldScrollToBottom) {
        const node= ReactDOM.findDOMNode(this)
        node.scrollTop = node.scrollHeight
   }
}
    
    render() {
       if(!this.props.roomId) {
           return (
               <div style={style}>
                   <div style={alert}>
                   Alert: Join a Room
                    </div>
               </div>
           )
       }
        return (
        <div id='msg' style={style}>
            {this.props.messages.map((message,indx)=>{
                return(
                    <Message key={indx}
                    user ={message.senderId}
                    text ={message.text}
                    />
                        
                
                )
            }
        )}

        </div>)
    }
}


export default MessageList;

/**********  CSS STYLE  **********/

const style= {
    width: '70%',
    height: '490px',
    overflow: 'auto',
    display: 'inline',
    margin: '1px',
    border: '1px solid gray',
    textAlign: 'left',

}
 
const alert= {
    textAlign: 'center',
    fontSize: '2em',
    marginTop: '170px',
    color: 'red'
}