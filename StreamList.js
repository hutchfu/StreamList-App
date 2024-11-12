import React, { useState } from 'react';
import './StreamList.css';

function StreamList() {
  const [inputValue, setInputValue] = useState('');
  const [streamingList, setStreamingList] = useState([]);

  const handleAdd = () => {
    if (inputValue.trim()) {
      setStreamingList([...streamingList, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="stream-list">
      <h2>My Streaming List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a movie or show..."
      />
      <button onClick={handleAdd}>+ Add to List</button>

      <ul>
        {streamingList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
