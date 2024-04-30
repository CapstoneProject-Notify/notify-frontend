import { BoxBackground } from "./styles";

function InputBox(props) {
  return (
    <BoxBackground
      value={props.value}
      onChange={props.onChange}
    ></BoxBackground>
  );
}

export default InputBox;
