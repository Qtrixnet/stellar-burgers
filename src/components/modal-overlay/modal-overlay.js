import modalOverlayStyles from './modal-overlay.module.css';

import { createPortal } from 'react-dom';

export default function ModalOverlay(props) {
  const modalRoot = document.getElementById("react-modals");

  return createPortal(
    <>
      <div className={modalOverlayStyles.overlay}>
        {props.children}
      </div>
    </>,
    modalRoot
  );
};