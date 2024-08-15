import React from 'react';
import ChatInterface from './ChatInterface';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Chatbot</h1>
      </header>
      <main>
        <ChatInterface />
      </main>
    </div>
  );
};

export default App;