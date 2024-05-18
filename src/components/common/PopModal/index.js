import ReactModal from "react-modal";
import { customModalStyles } from "./styles";
import { modalContainer } from "./styles";

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
      {modal}
    </ReactModal>
  );
}
export default PopModal;
