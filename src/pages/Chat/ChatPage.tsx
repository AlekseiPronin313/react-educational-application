import React from "react";
const ChatPage: React.FC = () => {
    return (
        <div>
            <Chat/>
        </div>
    )
}

const Chat: React.FC = () => {
    return (
        <div>
            <Messages/>
            <AddMessageForm/>
        </div>
    )
}

const Messages: React.FC = () => {
    const message = [1, 2, 3, 4]
    return (
        <div>
            {message.map(((m: any, index) => <div key={index}><Message/></div>))}
        </div>
    )
}

const Message: React.FC = () => {
    const message = {
        url: 'https://4lapki.com/wp-content/uploads/2018/12/Harakter-porody-Aljaskinskij-malamut.jpg',
        author: 'Aventon',
        text: 'Hello friends'
    }
    return (
        <div>
            <img style={{width: '60px'}} src={message.url} alt={'img'}/>
            <b>{message.author}</b>
            <br/>
            {message.text}
            <hr/>
        </div>
    )
}

const AddMessageForm: React.FC = () => {
    return (
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Send</button>
            </div>
        </div>
    )
}

export default ChatPage
