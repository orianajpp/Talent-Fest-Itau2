//import React, { useState } from 'react';
import "./modal.css";

function Modal({ message, showModal, closeModal }) {
  return (
    <div className="modal" style={{ display: showModal ? "block" : "none" }}>
      <button className="close-button" onClick={closeModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-circle-x"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#000000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M10 10l4 4m0 -4l-4 4" />
        </svg>
      </button>
      <label>{message}</label>
    </div>
  );
}

export default Modal;
