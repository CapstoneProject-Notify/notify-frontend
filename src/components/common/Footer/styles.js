import styled from "@emotion/styled/macro";

export const StyledFooter = styled.footer`
  margin-top: 100px;
  display: flex;

  padding: 40px 0;
  background-color: ${({ theme }) => theme.color.deepGreen};
  width: 100%;
  color: ${({ theme }) => theme.color.white};
`;

export const FooterContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 7px;
  width: 1280px;
`;

export const FooterTextContainer = styled.div`
  font-family: "GmarketSansMedium";
  display: flex;
  justify-content: center;
  font-size: 12px;
`;
