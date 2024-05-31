import ReactModal from "react-modal";
import { customModalStyles, customBtnStyles, customImgStyles } from "./styles";
import NanureLogo from "../../../assets/logo.png";

function PopModal({ isOpen, setIsOpen, message }) {
  const modal = <modalContainer></modalContainer>;
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={customModalStyles}
      ariaHideApp={false}
      contentLabel="Pop up Message"
      //   shouldCloseOnOverlayClick={false}
    >
      <img src={NanureLogo} alt="nanure-logo" style={customImgStyles}></img>
      <div>{message}</div>
      <button style={customBtnStyles} onClick={() => setIsOpen(false)}>
        close
      </button>
    </ReactModal>
  );
}
export default PopModal;
