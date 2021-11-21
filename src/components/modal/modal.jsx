import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import modalStyles from './modal.module.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Modal({ children, popupCloseHandler, title = '' }) {

  useEffect(() => {
    const handleEscapeClose = (evt) => {
      if (evt.key === 'Escape') {
        popupCloseHandler(false)
      };
    };

    document.addEventListener('keyup', handleEscapeClose);
    return () => {
      document.removeEventListener('keyup', handleEscapeClose);
    };
  }, [popupCloseHandler])

  return (
    <div className={`pt-15 pr-10 pl-10 pb-15 ${modalStyles.container}`}>
      <header className={modalStyles.header}>
        {title && (<h2 className={`${modalStyles.title} text text_type_main-large`}>{title}</h2>)}
        <button onClick={() => popupCloseHandler(false)} className={modalStyles.closeButton}>
          <CloseIcon type="primary" />
        </button>
      </header>
      {children}
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  popupCloseHandler: PropTypes.func,
  title: PropTypes.string,
}; 