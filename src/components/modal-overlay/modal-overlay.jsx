import modalOverlayStyles from './modal-overlay.module.css';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

export default function ModalOverlay({ children, popupCloseHandler }) {
  const modalRoot = document.getElementById("react-modals");

  return createPortal(
    <div onClick={() => popupCloseHandler(false)} className={modalOverlayStyles.overlay}>
      {children}
    </div>
    ,
    modalRoot
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.element,
  popupCloseHandler: PropTypes.func,
}; 