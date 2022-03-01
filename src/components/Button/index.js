import React from 'react';

const Button = ({ btnText, clickHandler }) => {
  return (
      <button className={'p-4 border border-custom-400 rounded bg-custom-200 hover:bg-custom-300 transition m-2'} onClick={clickHandler}>
        {btnText}
      </button>
  );
};

export default Button;
