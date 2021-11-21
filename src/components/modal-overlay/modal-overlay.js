import { useEffect } from 'react'
import modalOverlayStyles from './modal-overlay.module.css';

import { createPortal } from 'react-dom';

export default function ModalOverlay({ onCloseButtonClick, isOpen, children }) {
  const modalRoot = document.getElementById("react-modals");

  useEffect(() => {
    if (!isOpen) return;
    const handleEscapeClose = (evt) => {
      if (evt.key === 'Escape') {
        onCloseButtonClick()
      };
    };

    document.addEventListener('keyup', handleEscapeClose);
    return () => {
      document.removeEventListener('keyup', handleEscapeClose);
    };
  }, [isOpen, onCloseButtonClick])

  return createPortal(
    <>
      {
        isOpen && <div onClick={onCloseButtonClick} className={modalOverlayStyles.overlay}>
          {children}
        </div>
      }
    </>,
    modalRoot
  );
};