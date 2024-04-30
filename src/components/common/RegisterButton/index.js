import { GreenBackground } from "./styles";

function RegisterButton({ onClick }) {
  return <GreenBackground onClick={() => onClick}>REGISTER</GreenBackground>;
}

export default RegisterButton;
