
import React, {useState} from 'react';

function App () {
  const [isFocused, setIsFocused] = useState (false);

  const handleFocus = () => {
    setIsFocused (true);
  };

  const handleBlur = () => {
    setIsFocused (false);
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    outline: 'none',
    border: isFocused ? '2px solid #007bff' : '1px solid gray',
    backgroundColor: isFocused ? '#e6f0ff' : 'white',
    transition: 'all 0.3s ease-in-out',
  };

  const hoverBlurStyle = {
    transition: 'filter 0.3s ease-in-out',
  };

  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <input
        type="text"
        placeholder="Click me!"
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={inputStyle}
      />

      <div
        style={{
          ...hoverBlurStyle,
          marginTop: '40px',
          fontSize: '20px',
          cursor: 'pointer',
        }}
        onMouseEnter={e => (e.target.style.filter = 'blur(3px)')}
        onMouseLeave={e => (e.target.style.filter = 'none')}
      >
        Hover over this text to blur it
      </div>

      <img
        src="./images.jpg"
        alt="Placeholder"
        style={{
          ...hoverBlurStyle,
          marginTop: '20px',
          cursor: 'pointer',
        }}
        onMouseEnter={e => (e.target.style.filter = 'blur(3px)')}
        onMouseLeave={e => (e.target.style.filter = 'none')}
      />
    </div>
  );
}

export default App;
