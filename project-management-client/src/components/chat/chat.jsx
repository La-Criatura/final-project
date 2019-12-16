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

        this.socket = io('http://localhost:5000');

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
        return (
            <div id="cont">
                {/* Box que contiene el chat */}
                <div >
                    <ChatTag  className="chatBox" id="chatBox">
                        {this.state.messages.map((elem, idx) => {
                            return (
                                <h6 key={idx}>
                                    {elem.user} : {elem.text}
                                </h6>
                            );
                        })}
                    </ChatTag>
                    {/* Input para nuevos mensajes */}
                    <div className="textForm">
                        <InputMess info={this.sendMessage}></InputMess>
                    </div>
                </div>
            </div>
        )
    }
}
