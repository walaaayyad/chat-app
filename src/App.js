//Helpful Video on this App (https://www.youtube.com/watch?v=jFNHerJqvFw&t=4202s)
import React, {Component} from 'react'
import Chatkit from "@pusher/chatkit-client"
import { tokenUrl, instanceLocator } from './config'
import RoomList from './Components/RoomList'
import MessageList from './Components/MessageList'
import SendMessageForm from './Components/SendMessageForm'
import NewRoomForm from './Components/NewRoomForm'
import UsersList from './Components/UsersList'
import './App.css';


class App extends Component{
 state={
  roomId: null,
  messages: [],
  joinablerooms: [],
  joinedRooms: [],
  users: [] // to get online users 
}

 
  componentDidMount() {
    
    // Create chatManager to start connect with chatkit   [https://pusher.com/docs/chatkit/quick_start/javascript#connect-to-chatkit]
    const tokenProvider= new Chatkit.TokenProvider({
      url:tokenUrl
    })
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: instanceLocator,
      userId: 'walaa',
      tokenProvider: tokenProvider
    })
    chatManager.connect() /*** Second Step is use chatManager to connect with API */
    .then(currentUser => {
      this.setState({ currentUser }) //test online users
      this.currentUser= currentUser /**2- Send messages to messages list 'SendMessageForm component' **/
      this.getRooms()   /**3- Appear joined rooms in the 'RoomList' **/
      /*this.subscribeToRoom()   **1- Receive messages from chatkit to 'MessageList' **/
      
      })
    .catch(error => console.error('error', error))  
  }


  getRooms() {
    this.currentUser.getJoinableRooms() 
    .then(joinablerooms => {
      this.setState({
        joinablerooms,
        joinedRooms: this.currentUser.rooms
      })  
    })
    .catch(err=> console.log('error on joinable rooms: ', err))
  }

 // Subscribe to room   [https://pusher.com/docs/chatkit/quick_start/javascript#subscribe-to-a-room]
  subscribeToRoom(id) {
    this.setState({ messages: [] })
    this.currentUser.subscribeToRoom({ 
        roomId: id ,
        hooks: {
          onMessage: message => {
            this.setState({
              messages: [...this.state.messages,message]
            })
         
          },
          onPresenceChanged: (state,user) => { // to find the state of users (online, offline)
           
            //console.log(`User ${user.name} is ${state.current}`)
          } 
        },
        messageLimit: 15
      })
     .then(room=> {
      //console.log(`Created room called  ${room.name}`)
       this.setState({
         roomId: room.id,
         users: room.users // for online users
        })
       this.getRooms()
     })
     .catch(err=> console.log('err on sub ',err))
  }
  // Write new msg & add it to the msgs list 
  sendMessage=(text)=> {
   this.currentUser.sendMessage({
     text,
     roomId: this.state.roomId
   })
   
  }

  // Add new room in the Room List 
  createRoom= (name)=> {
    this.currentUser.createRoom({
      name
    })
    .then(room => this.subscribeToRoom(room.id))
    .catch(err => console.log('error with create room', err))
    
  }
  
  render(){
    //console.log(this.currentUser)
    return (
      <div className="App">
        <header>CHAT APPLICATION</header>
          <RoomList 
              subscribeToRoom= {this.subscribeToRoom.bind(this)}  // Add .bind(this) to the method if it has an argument
              rooms= {[...this.state.joinablerooms,...this.state.joinedRooms]}
              roomId= {this.state.roomId}/>
          
          <MessageList   
              roomId= {this.state.roomId}
              messages = {this.state.messages}/>

          <UsersList 
              users={this.state.users}
              currentUser={this.currentUser}/>

          <NewRoomForm
              createRoom = {this.createRoom.bind(this)}/>
          
          <SendMessageForm  
              disabled={!this.state.roomId} // disable the sendMessageForm if no room subscribed(like at the beginning of App)
              sendMessage = {this.sendMessage}/>
        
      </div>
    );
  }
  
}

export default App;

