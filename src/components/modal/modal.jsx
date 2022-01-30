import { useEffect } from 'react';
import modalStyles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from '../modal-overlay/modal-overlay';

const Modal = ({ handlePopupClose, children, title = '' }) => {
  const modalRoot = document.getElementById("react-modals");

  useEffect(() => {
    const handleEscapeClose = (evt) => {
      if (evt.key === 'Escape') {
        handlePopupClose()
      };
    };

    document.addEventListener('keyup', handleEscapeClose);
    return () => {
      document.removeEventListener('keyup', handleEscapeClose);
    };
  }, [handlePopupClose])


  return createPortal(
    <>
      <div className={`${modalStyles.container} pt-15 pr-10 pl-10 pb-15`}>
        <header className={modalStyles.header}>
          {title && (<h2 className={`${modalStyles.title} text text_type_main-large`}>{title}</h2>)}
          <button onClick={handlePopupClose} className={modalStyles.closeButton}>
            <CloseIcon type="primary" />
          </button>
        </header>
        {children}
      </div>
      <ModalOverlay handlePopupClose={handlePopupClose} />
    </>
    , modalRoot
  );
};

Modal.propTypes = {
  handlePopupClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

export default Modal;