import React, { useState } from 'react';
import axios from 'axios';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Array<{ text: string; fromUser: boolean }>>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { text: input, fromUser: true }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await axios.post('http://localhost:5001/chat', { message: input });
      setMessages([...newMessages, { text: response.data.reply, fromUser: false }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages([...newMessages, { text: 'Error: Could not get response', fromUser: false }]);
    }
  };

  return (
    <div>
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ textAlign: message.fromUser ? 'right' : 'left' }}>
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatInterface;