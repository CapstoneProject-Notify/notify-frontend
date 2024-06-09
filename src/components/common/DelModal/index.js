import ReactModal from "react-modal";
import { customModalStyles, customBtnStyles, customImgStyles } from "./styles";
import NanureLogo from "../../../assets/logo.png";

function DelModal({ isOpen, setIsOpen, message, setWithdrawal }) {
  const handleModalBtn = (e) => {
    setIsOpen(true);
    setWithdrawal(true);
    e.stopPropagation();
    console.log('hi');
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
        Yes
      </button>
    </ReactModal>
  );
}
export default DelModal;
