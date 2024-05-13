import { FC, ReactElement } from 'react';
import './modal.css'; // Путь к CSS файлу вашего модального окна

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactElement;
}

const Modal: FC<ModalProps> = ({ isOpen, children, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
