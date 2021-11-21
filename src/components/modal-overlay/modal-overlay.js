import { useEffect, Children, cloneElement, createRef } from 'react'
import modalOverlayStyles from './modal-overlay.module.css';

import { createPortal } from 'react-dom';

export default function ModalOverlay({ onCloseButtonClick, isOpen, children }) {
  const modalRoot = document.getElementById("react-modals");

  const modalOverlayRef = createRef();

  //Добавляем пропс с функцией закрытия попапу в children
  const renderChildren = (children) => {
    return Children.toArray(children).map(child => cloneElement(child, { onCloseButtonClick })
    )
  }

  const handleOverlayClick = (evt) => {
    modalOverlayRef.current === evt.target && onCloseButtonClick()
  }

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
        isOpen && <div ref={modalOverlayRef} onClick={handleOverlayClick} className={modalOverlayStyles.overlay}>
          {renderChildren(children)}
        </div>
      }
    </>,
    modalRoot
  );
};