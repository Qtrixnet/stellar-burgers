import { useDispatch, useSelector } from 'react-redux';
import modalOverlayStyles from './modal-overlay.module.css';

export default function ModalOverlay() {
  const dispatch = useDispatch();
  const isOrderDetailsPopupOpen = useSelector(state => state.popupState.isOrderDetailsPopupOpen);

  const overlayClickHandler = () => {
    isOrderDetailsPopupOpen ? dispatch({ type: 'CHANGE_ORDER_DETAILS_POPUP_STATE', payload: false }) : dispatch({ type: 'CHANGE_INGREDIENTS_POPUP_STATE', payload: false });
    isOrderDetailsPopupOpen ? dispatch({ type: 'DELETE_ORDER_DATA' }) : dispatch({ type: 'DELETE_SELECTED_INGREDIENT' })
  }

  return (
    <div onClick={overlayClickHandler} className={modalOverlayStyles.overlay}>
    </div>
  );
};