import React, { Component } from 'react'

export default class InputMess extends Component {
    constructor() {
        super()
        this.state = {
            text: ""
        }
    }
    handlerText = (e) => {
        this.setState({ ...this.state, text: e.target.value })
    }
    handlerSubmit = (e) => {
        e.preventDefault()
        this.props.info(this.state.text)
        this.setState({ ...this.state, text: "" })
    }
    
    render() {
        return (
            <form>
            <div className="chatButton">
                <div className="textForm">
                    <input
                        onChange={e => {
                            this.handlerText(e);
                        }}
                        type="text"
                        placeholder="   Escribe tu mensaje..."
                        value={this.state.text}
                        
                    />
                </div>
                <button className="btn btn-info" type="submit" onClick={(e) => { this.handlerSubmit(e) }}>Send</button>
                </div>
            </form>
        )
    }
}