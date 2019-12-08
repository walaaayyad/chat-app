/******   Inline Style at the Bottom   ******/

import React, {Component} from 'react'

class sendMessageForm extends Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
        this.handlerChange = this.handlerChange.bind(this)
        this.handlerSubmit = this.handlerSubmit.bind(this)
    }
    handlerChange=(e)=> {
     this.setState({message: e.target.value})
    }
    handlerSubmit=(e)=> {
        e.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({message: ''})
        }
    render() {
        return(
            <form style={style}
                  onSubmit={this.handlerSubmit }>
                    <input 
                        disabled={this.props.disabled}
                        onChange={this.handlerChange}
                        value={this.state.message}
                        style={inputStyle}
                        placeholder="Input Your Message"
                        type="text"/>
            </form>
        ) 
    }
}

export default sendMessageForm;

/**********  CSS STYLE  **********/
/* Form Style */
const style={
    width: '70%',
    height: '60px',
    margin: '1px',
    border: '1px solid gray',
    display: 'inline-block',
    textAlign: 'left'
}
/* Input Style */
const inputStyle= {
    width: '99.5%',
    height: '90%',
    fontSize: '1em'
}


//Helpful Video on this App (https://www.youtube.com/watch?v=jFNHerJqvFw&t=4202s)