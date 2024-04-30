import styled from "@emotion/styled/macro";

export const CarouselWapper = styled.div`
  /* position: fixed; */
  width: 100%;
  height: 500vm;
`;

export const PictureText = styled.div`
  font-family: "GmarketSansMedium";
  position: absolute;
  top: 85%;
  left: 4%;
  color: ${({ theme }) => theme.color.white};
  font-size: 25px;
`;

export const SlideWrapper = styled.div`
  position: relative;
`;

