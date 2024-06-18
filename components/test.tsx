"use client"

import React, { useState } from 'react';
import { useChat } from '@ai-sdk/react';
import 'tailwindcss/tailwind.css';

const predefinedPrompts = [
  "Hello, how can I assist you today?",
  "What are your working hours?",
  "Tell me about your services.",
];

const Chatbot = () => {
  const [ messages, sendMessage ] = useChat();
  const [input, setInput] = useState<string>('');

  const handleSend = async () => {
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <div className="mb-4">
        {predefinedPrompts.map((prompt, index) => (
          <button
            key={index}
            className="bg-blue-500 text-white p-2 rounded mr-2"
            onClick={() => setInput(prompt)}
          >
            {prompt}
          </button>
        ))}
      </div>
      <div className="border p-4 rounded h-96 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block px-4 py-2 rounded ${msg.role === 'user' ? 'bg-green-200' : 'bg-gray-200'}`}>
              {msg.content}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <input
          type="text"
          className="border p-2 w-full rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-green-500 text-white p-2 rounded mt-2 w-full"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
