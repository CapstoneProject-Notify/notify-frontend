import styled from "@emotion/styled";

export const GreenBackground = styled.button`
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.btnGreen};
  color: #FFFFFF;
  height: 50px;
  width: 118px;
  
  font-family: Inter;
  font-weight: 100;
  font-style: bold;
  font-size: 23px;
  margin-left: 30px;
`;
