import React from 'react';
import './index.scss';
import { Context } from '../../Context';
import Chat from '../Chat';

function Messenger() {
  const [message, setMessage] = React.useState('');
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [messages1, setMessages1] = React.useState([]);
  const [messages2, setMessages2] = React.useState([]);
  const [messages3, setMessages3] = React.useState([]);
  const { login } = React.useContext(Context);

  const handleSend = (e) => {
    e.preventDefault();
    if (message && selectedUser) {
      const newMessage = {
        sender: login,
        text: message,
      };

      if (selectedUser === 'John') {
        setMessages1([...messages1, newMessage]);
      } else if (selectedUser === 'Jane') {
        setMessages2([...messages2, newMessage]);
      } else if (selectedUser === 'Bob') {
        setMessages3([...messages3, newMessage]);
      }
      setMessage('');
    }
  };

  return (
    <div className="chat">
      <div className="chat-users">
        <ul>
          <li
            className={selectedUser === 'John' ? 'user selected' : 'user'}
            onClick={() => setSelectedUser('John')}>
            John
          </li>
          <li
            className={selectedUser === 'Jane' ? 'user selected' : 'user'}
            onClick={() => setSelectedUser('Jane')}>
            Jane
          </li>
          <li
            className={selectedUser === 'Bob' ? 'user selected' : 'user'}
            onClick={() => setSelectedUser('Bob')}>
            Bob
          </li>
        </ul>
      </div>
      <div className="chat-window">
        {selectedUser === 'John' ? <Chat messages={messages1} /> : ''}
        {selectedUser === 'Jane' ? <Chat messages={messages2} /> : ''}
        {selectedUser === 'Bob' ? <Chat messages={messages3} /> : ''}
        <form onSubmit={handleSend} className="chat-form">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Введите сообщение..."
            className="chat-input"
          />
          <button type="submit" className="chat-send">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Messenger;
