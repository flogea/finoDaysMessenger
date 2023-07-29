import React from 'react';
import { Context } from '../../Context';
import './index.scss';

function Chat({ messages }) {
  const { login } = React.useContext(Context);

  return (
    <div className="chat-messages">
      {messages.map((msg, index) => (
        <div key={index} className="message">
          <span className="message-sender">{login}</span> {msg.text}
        </div>
      ))}
    </div>
  );
}

export default Chat;
