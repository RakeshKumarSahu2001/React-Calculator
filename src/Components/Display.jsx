import React from 'react';

function Display({ displayVal, read, handleController,handleKeyDown }) {
  return (
    <>
    <div className='display-box'>
      <input type="text" value={displayVal}  onKeyDown={handleKeyDown} readOnly={read} className='display-style' />
      <button onClick={handleController} className={`btn ${read?"btn-primary":"btn-light"} controller`} >Con</button>
      </div>
    </>
  );
}

export default Display;
