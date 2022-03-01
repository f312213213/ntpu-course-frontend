import React from 'react';

const TextInput = ({ dataName, dataType, dataRef }) => {
  return (
      <input type={dataType} placeholder={dataName} ref={dataRef} className={'p-4 rounded outline-1 outline-custom-600 border border-custom-400 focus:ring-custom-600'}/>
  );
};

export default TextInput;
