import React from "react";
import { StyledLinkDiv } from "./styles";
import { Link } from "react-router-dom";

function StyledLink({ text, to }) {
  return (
    <Link to={to}>
      <StyledLinkDiv>{text}</StyledLinkDiv>
    </Link>
  );
}

export default StyledLink;
