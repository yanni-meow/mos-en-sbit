import React from 'react';
import { createPortal } from 'react-dom';

const Modal = (props) => {
  const { children } = props;

  return (
    <>
      {createPortal(
        <div
          className="modalWindow"
          style={{
            position: 'absolute', top: '12vh', left: '2.5vw', zIndex: '10',
          }}
        >
          { children }
        </div>, document.body,
      )}
    </>
  );
};

export default Modal;
