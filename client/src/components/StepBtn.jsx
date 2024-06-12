import React from 'react';

const StepBtn = ({ onClick }) => {
  const buttonStyle = {
    backgroundColor: '#CD7F32', // Bronze color
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      +
    </button>
  );
};

export default StepBtn;