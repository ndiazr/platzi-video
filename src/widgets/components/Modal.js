import React from 'react';
import { Link } from 'react-router-dom';

import './Modal.css';

const Modal = (props) => {
  return (
    <div className="Modal">
      {props.children}
      <Link
        to={{
          pathname: '/videos',
          state: {
            modal: false,
          }
        }}
      >
        <button
          className="Modal-close"
          onClick={props.handleClick}
        />
      </Link>
    </div>
  )
}

export default Modal;