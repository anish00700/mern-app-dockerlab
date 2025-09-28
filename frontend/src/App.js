// frontend/src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous message
    try {
      // The backend URL is determined by our Docker Compose setup
      const response = await axios.post('http://localhost:5000/api/submit', { name, email });
      setMessage(response.data.message);
      setName('');
      setEmail('');
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN Stack User Form</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {message && <p className="message">{message}</p>}
      </header>
    </div>
  );
}

export default App;