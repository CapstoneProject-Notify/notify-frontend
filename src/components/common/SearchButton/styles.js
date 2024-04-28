import styled from "@emotion/styled";

export const GreenBackground = styled.button`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.btnGreen};
  color: #FFFFFF;
  height: 46px;
  width: fit-content;
  padding: 7px;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-style: italic;
`;
