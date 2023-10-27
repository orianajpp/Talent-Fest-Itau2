//import React, { useState } from 'react';
import "./modal.css";

function Modal({ message, showModal, closeModal }) {
  return (
    <div className="modal" style={{ display: showModal ? "block" : "none" }}>
      <div className="div-btn-close-modal"><button className="close-button" onClick={closeModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-circle-x"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#000000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M10 10l4 4m0 -4l-4 4" />
        </svg>
        
      </button></div>
      <div className="div-message-modal"><label className="message-modal">{message}</label></div>
      
    </div>
  );
}

export default Modal;
