import ReactDOM from 'react-dom';
import classes from './Modal.module.scss';

interface onCloseType {
  onClose: () => void;
  portalElement?: HTMLElement;
}
const Backdrop: React.FC<onCloseType> = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const portalElement = document.getElementById('overlay')!;

const Summary: React.FC = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.contents}>{children}</div>
    </div>
  );
};

const Modal: React.FC<onCloseType> = ({ onClose, children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}

      {ReactDOM.createPortal(<Summary>{children}</Summary>, portalElement)}
    </>
  );
};
export default Modal;
