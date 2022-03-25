import {useEffect, FC} from 'react';
import modalStyles from './modal.module.css';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {createPortal} from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import {IModalProps} from "../../services/types/types";

const Modal: FC<IModalProps> = ({handlePopupClose, children, title = ''}) => {
  const modalRoot: HTMLElement = document.getElementById("react-modals") as HTMLElement;

  useEffect(() => {
    const handleEscapeClose = (evt: { key: string; }) => {
      if (evt.key === 'Escape') {
        handlePopupClose()
      }
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
            <CloseIcon type="primary"/>
          </button>
        </header>
        {children}
      </div>
      <ModalOverlay handlePopupClose={handlePopupClose}/>
    </>
    , modalRoot
  );
};

export default Modal;