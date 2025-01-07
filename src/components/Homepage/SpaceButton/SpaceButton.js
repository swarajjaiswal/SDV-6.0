import React from 'react';
import './SpaceButton.css';

const SpaceButton = ({ text }) => {
  return (
    <button class="regbutton">
      <span class="regbutton_lg">
          <span class="regbutton_sl"></span>
          <span class="regbutton_text">{text}</span>
      </span>
    </button>
  );
};

export default SpaceButton;
