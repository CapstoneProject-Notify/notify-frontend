import styled from "@emotion/styled";

export const GreenBackground = styled.button`
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.color.btnGreen};
  color: #FFFFFF;
  height: 46px;
  width: fit-content;
  padding: 7px;
  font-family: Inter;
  font-style: italic;
  font-size: 17px;
  margin-bottom: 10px;
`;
