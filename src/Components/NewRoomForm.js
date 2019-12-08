/******   Inline Style at the Bottom   ******/


import React, { Component } from 'react'

class newRoomForm extends Component {
    /*      ****OLd way****
    constructor(){
        super()
        this.state = {
            roomName: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

         handleChange(e) {
        this.setState({
            roomName: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.createRoom(this.state.roomName)
    }
    }*/

    /*---------------------------------------------------------------------
       ****New Way****
    Note-->  if you use this way and want to pass method to child append .bind(this)
    like <child 
        handleChange = {this.handleChage.bind(this)}/>
    */
    state={
        roomName:''
    }

    handleChange= (e)=> {
        this.setState({
            roomName: e.target.value
        })
    }
    handleSubmit= (e)=> {
        e.preventDefault()
        this.props.createRoom(this.state.roomName)
        this.setState({ roomName: ''})
    }
    render() {
        return (
            <div style={style}>
                <form onSubmit={this.handleSubmit}>
                    <input
                     style={inputStyle}
                     value={this.state.roomName}
                     onChange={this.handleChange} 
                     type='text'
                     placeholder='New Room'
                     required/>
                </form>
            </div>
        )
    }
}


export default newRoomForm;


/**********  CSS STYLE  **********/
/**** Room Form Style ****/
const style={
    width: '26%',
    height: '60px',
    backgroundColor:'white',
    margin: '1px',
    border: '1px solid gray',
    display: 'inline-block'
}
/* Input Style */
const inputStyle= {
    width: '99%',
    height: '52px',
    fontSize: '1em'
}