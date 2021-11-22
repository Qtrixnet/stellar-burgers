import modalStyles from './modal.module.css';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Modal({ children, popupCloseHandler }) {
  const modalRoot = document.getElementById("react-modals");

  useEffect(() => {
    const handleEscapeClose = (evt) => {
      if (evt.key === 'Escape') {
        popupCloseHandler(false)
      };
    };

    document.addEventListener('keyup', handleEscapeClose);
    return () => {
      document.removeEventListener('keyup', handleEscapeClose);
    };
  }, [popupCloseHandler])

  return createPortal(
    <div className={`${modalStyles.container}`}>
      {children}
    </div>
    , modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.any.isRequired,
  popupCloseHandler: PropTypes.func.isRequired,
};