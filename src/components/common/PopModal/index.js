import ReactModal from "react-modal";
import { customModalStyles, customBtnStyles, customImgStyles } from "./styles";
import NanureLogo from "../../../assets/logo.png";

function PopModal({ isOpen, setIsOpen, message }) {
  const modal = <modalContainer></modalContainer>;
  const handleModalBtn = (e) => {
    setIsOpen(false);
    e.stopPropagation();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleModalBtn}
      style={customModalStyles}
      ariaHideApp={false}
      contentLabel="Pop up Message"
    >
      <img src={NanureLogo} alt="nanure-logo" style={customImgStyles}></img>
      <div>{message}</div>
      <button style={customBtnStyles} onClick={handleModalBtn}>
        close
      </button>
    </ReactModal>
  );
}
export default PopModal;
