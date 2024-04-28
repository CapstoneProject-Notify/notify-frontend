import { StyledTitle, OrangeText, GreenText } from "./styles";

function Title(props) {
  return (
    <StyledTitle>
      <OrangeText>{props.text1}</OrangeText>
      <GreenText>{props.text2}</GreenText>
    </StyledTitle>
  );
}

export default Title;
