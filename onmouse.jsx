import React, {useState} from 'react';

function MouseEventBox () {
  const [message, setMessage] = useState ('Hover over me!');
  const [bgColor, setBgColor] = useState ('lightblue');

  const handleMouseOver = () => {
    setMessage ('Mouse is over the box!');
    setBgColor ('#90ee90');
  };

  const handleMouseOut = () => {
    setMessage ('Hover over me!');
    setBgColor ('lightblue');
  };

  const boxStyle = {
    width: '200px',
    height: '100px',
    backgroundColor: bgColor,
    textAlign: 'center',
    lineHeight: '100px',
    margin: '50px auto',
    fontSize: '18px',
    borderRadius: '10px',
    transition: 'background-color 0.3s',
  };

  return (
    <div
      style={boxStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {message}
    </div>
  );
}

export default MouseEventBox;