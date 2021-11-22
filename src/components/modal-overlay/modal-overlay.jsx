import modalOverlayStyles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

export default function ModalOverlay({ popupCloseHandler }) {

  return (
    <div onClick={() => popupCloseHandler(false)} className={modalOverlayStyles.overlay}>
    </div>
  );
};

ModalOverlay.propTypes = {
  popupCloseHandler: PropTypes.func.isRequired,
};