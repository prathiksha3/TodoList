
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter'; // Import the Counter component
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Counter /> {/* Render the Counter component */}
  </React.StrictMode>,
  document.getElementById('root')
);
