import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import modalStyles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from '../modal-overlay/modal-overlay';

export default function Modal({ children, title = '' }) {
  const dispatch = useDispatch();
  const modalRoot = document.getElementById("react-modals");
  const isOrderDetailsPopupOpen = useSelector(state => state.popupState.isOrderDetailsPopupOpen);

  useEffect(() => {
    const handleEscapeClose = (evt) => {
      if (evt.key === 'Escape') {
        isOrderDetailsPopupOpen ? dispatch({ type: 'CHANGE_ORDER_DETAILS_POPUP_STATE', payload: false }) : dispatch({ type: 'CHANGE_INGREDIENTS_POPUP_STATE', payload: false });
        isOrderDetailsPopupOpen ? dispatch({ type: 'DELETE_ORDER_DATA' }) : dispatch({ type: 'DELETE_SELECTED_INGREDIENT' })
      };
    };

    document.addEventListener('keyup', handleEscapeClose);
    return () => {
      document.removeEventListener('keyup', handleEscapeClose);
    };
  }, [dispatch, isOrderDetailsPopupOpen])

  const closeButtonClickHandler = () => {
    isOrderDetailsPopupOpen ? dispatch({ type: 'CHANGE_ORDER_DETAILS_POPUP_STATE', payload: false }) : dispatch({ type: 'CHANGE_INGREDIENTS_POPUP_STATE', payload: false });
    isOrderDetailsPopupOpen ? dispatch({ type: 'DELETE_ORDER_DATA' }) : dispatch({ type: 'DELETE_SELECTED_INGREDIENT' })
  }

  return createPortal(
    <>
      <div className={`${modalStyles.container} pt-15 pr-10 pl-10 pb-15`}>
        <header className={modalStyles.header}>
          {title && (<h2 className={`${modalStyles.title} text text_type_main-large`}>{title}</h2>)}
          <button onClick={closeButtonClickHandler} className={modalStyles.closeButton}>
            <CloseIcon type="primary" />
          </button>
        </header>
        {children}
      </div>
      <ModalOverlay />
    </>
    , modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};