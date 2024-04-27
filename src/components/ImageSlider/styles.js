import styled from "@emotion/styled/macro";

export const CarouselWapper = styled.div`
  position: fixed;
  width: 100%;
`;

export const PictureText = styled.div`
  position: absolute;
  top: 80%;
  left: 2%;
  width: 100%;
  color: ${({ theme }) => theme.color.white};
  font-size: 25px;
`;
