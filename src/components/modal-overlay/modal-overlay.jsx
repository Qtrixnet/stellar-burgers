import modalOverlayStyles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = ({ handlePopupClose }) => <div onClick={handlePopupClose} className={modalOverlayStyles.overlay}>
</div>;

ModalOverlay.propTypes = {
  handlePopupClose: PropTypes.func.isRequired,
};

export default ModalOverlay