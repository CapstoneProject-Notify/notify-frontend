import styled from "@emotion/styled";

export const GreenBackground = styled.button`
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.btnGreen};
  color: #ffffff;
  height: 50px;
  width: max-content;
  padding: 0 20px;

  font-family: Inter, sans-serif;
  font-weight: 100;
  font-style: bold;
  font-size: 20px;
  margin-left: 20px;
`;
