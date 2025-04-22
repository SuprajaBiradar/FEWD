import React, {useState} from 'react';

function TextUpdater () {
  const [text, setText] = useState ('Click the button to update this text.');

  const handleClick = () => {
    setText ('The text has been updated!');
  };

  return (
    <div className="p-4 text-center">
      <h1 className="text-xl mb-4">{text}</h1>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Update Text
      </button>
    </div>
  );
}

export default TextUpdater;
