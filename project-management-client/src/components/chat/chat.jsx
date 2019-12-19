import React, { Component } from 'react'
import io from 'socket.io-client'
import InputMess from './InputMess';
import ChatTag from './chatStyles';



export default class chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            participants: []
        }

        this.socket = io(`${process.env.REACT_APP_CHAT_URL}`);

        this.socket.on('newMessage', message => {
            // let part = this.state.participants
            // part.push(this.props.loggedInUser.username)
            let mess = this.state.messages;
            mess.push(message)
            this.setState({ ...this.state, messages: mess })
        })
    }

    // Este método recibe los textos que vienen del Input de los mensajes en el chat
    sendMessage = text => {
        if (text.trim() === "") return
        let mess = {
            text: text,
            user: this.props.loggedInUser.username
        };
        // Este ".emit" le envia al server los mensajes que escribamos
        // El server se encargará de propagarlos
        this.socket.emit("messageSent", mess);
    };
    // Con este método nos aseguramos de que el cuadro de chat tenga siempre el scroll
    // abajo, de esta manera el scroll no volverá arriba si el contenedor de mensajes
    // se llena por completo
    componentDidUpdate = () => {
        document.getElementById('chatBox').scrollTop = document.getElementById('chatBox').scrollHeight
    }

    render() {
        console.log(this.props.loggedInUser.username)
        return (
           
                <div className="chat has-shadow">
               
                <h4>Chat</h4>
                
                    <ChatTag className="chatBox" id="chatBox">
                        {this.state.messages.map((elem, idx) => {
                            return (
                                <h5 key={idx}>
                                    <span>{elem.user} </span>: {elem.text}
                                </h5>
                            );
                        })}
                    </ChatTag>
                    <div className="textForm">
                        <InputMess info={this.sendMessage}></InputMess>
                    </div>
                </div>
        )
    }
}
