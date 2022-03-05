import modalOverlayStyles from './modal-overlay.module.css';
import PropTypes from 'prop-types';
import {IModalOverlayProps} from "../../services/types/types";
import {FC} from 'react';

const ModalOverlay: FC<IModalOverlayProps>
  = ({handlePopupClose}) => <div onClick={handlePopupClose} className={modalOverlayStyles.overlay}>
</div>;

ModalOverlay.propTypes = {
  handlePopupClose: PropTypes.func.isRequired,
};

export default ModalOverlay