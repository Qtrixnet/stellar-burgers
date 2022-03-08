import modalOverlayStyles from './modal-overlay.module.css';
import {IModalOverlayProps} from "../../services/types/types";
import {FC} from 'react';

const ModalOverlay: FC<IModalOverlayProps>
  = ({handlePopupClose}) => <div onClick={handlePopupClose} className={modalOverlayStyles.overlay}>
</div>;

export default ModalOverlay